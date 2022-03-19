import {
  Check,
  DataObject,
  FindInPage,
  Flag,
  FlashOn,
  FlightTakeoff,
  Person,
  SportsScore,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControlLabel,
  LinearProgress,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { cSessionStorage } from "../impl/BrowserFix";
import { getFreeMemory, getTotalMemory } from "../impl/ClicornAPI";
import { EventEmitter } from "../impl/EventEmitter";
import { getBoolean } from "../modules/config/ConfigSupport";
import { getContainer } from "../modules/container/ContainerUtil";
import { MinecraftContainer } from "../modules/container/MinecraftContainer";
import { GameProfile } from "../modules/profile/GameProfile";
import { loadProfile } from "../modules/profile/ProfileLoader";
import { jumpTo, setChangePageWarn, triggerSetPage } from "./GoTo";
import { YNDialog } from "./OperatingHint";
import {
  ALICORN_DEFAULT_THEME_DARK,
  ALICORN_DEFAULT_THEME_LIGHT,
  isBgDark,
} from "./Renderer";
import { AlicornTheme, fullWidth } from "./Stylex";
import { randsl, tr } from "./Translator";
import { SpecialKnowledge } from "./Welcome";

const SESSION_ACCESSDATA_CACHED_KEY = "ReadyToLaunch.SessionAccessData"; // Microsoft account only
export const LAST_SUCCESSFUL_GAME_KEY = "ReadyToLaunch.LastSuccessfulGame";
const REBOOT_KEY_BASE = "ReadyToLaunch.Reboot.";
const useStyles = makeStyles((theme: AlicornTheme) => ({
  stepper: {
    backgroundColor: theme.palette.secondary.light,
    fontSize: "0.9rem",
  },
  textSP: {
    fontSize: cSessionStorage.getItem("smallFontSize") || "1rem",
    color: theme.palette.secondary.main,
  },
  text: {
    fontSize: "medium",
    flexGrow: 1,
    color: theme.palette.secondary.main,
  },
  root: {
    textAlign: "center",
  },
  primaryText: {
    flexGrow: 1,
    color: theme.palette.primary.main,
  },
}));
const LAST_USED_USER_NAME_KEY = "ReadyToLaunch.LastUsedUsername";
const GKEY = "Profile.PrefJava";
const DEF = "Default";
const NEED_QUERY_STATUS = false;
export const LAST_LAUNCH_REPORT_KEY = "ReadyToLaunch.LastLaunchReport";
export const LAST_FAILURE_INFO_KEY = "ReadyToLaunch.LastFailureInfo";
export const LAST_LOGS_KEY = "ReadyToLaunch.LastLogs";
export const LAST_CRASH_KEY = "ReadyToLaunch.LastCrash";
export function ReadyToLaunch(): JSX.Element {
  const [coreProfile, setProfile] = useState(new GameProfile({}));
  const [profileLoadedBit, setLoaded] = useState(0);
  let { id, container, server } =
    useParams<{ id: string; container: string; server?: string }>();
  id = decodeURIComponent(id);
  container = decodeURIComponent(container);
  server = server ? decodeURIComponent(server) : undefined;
  const mounted = useRef<boolean>();

  useEffect(() => {
    mounted.current = true;

    void (async () => {
      try {
        const d = await loadProfile(id, getContainer(container));
        if (mounted.current) {
          setProfile(d);
          setLoaded(1);
        }
      } catch (e) {
        console.log(e);
        if (mounted.current) {
          setLoaded(2);
        }
      }
    })();

    return () => {
      mounted.current = false;
    };
  }, []);
  const fullWidthProgress = fullWidth();
  return (
    <Container>
      <ThemeProvider theme={ALICORN_DEFAULT_THEME_LIGHT}>
        {profileLoadedBit === 1 ? (
          <Launching
            profile={coreProfile}
            container={getContainer(container)}
            server={server}
          />
        ) : profileLoadedBit === 2 ? (
          <Typography
            style={{ fontSize: "medium", color: "#ff8400" }}
            gutterBottom
          >
            {tr("ReadyToLaunch.CouldNotLoad")}
          </Typography>
        ) : (
          <LinearProgress
            color={"secondary"}
            sx={{ width: "80%" }}
            className={fullWidthProgress.progress}
          />
        )}
      </ThemeProvider>
      <AskURLDialog />
    </Container>
  );
}
enum LaunchingStatus {
  PENDING = "Pending",
  ACCOUNT_AUTHING = "PerformingAuth",
  FILES_FILLING = "CheckingFiles",
  ARGS_GENERATING = "GeneratingArgs",
  FINISHED = "Finished",
}
const LAUNCH_STEPS = [
  "Pending",
  "PerformingAuth",
  "CheckingFiles",
  "GeneratingArgs",
  "Finished",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LAUNCH_STEPS_ICONS: Record<string, any> = {
  1: <Flag fontSize={"small"} />,
  2: <Person fontSize={"small"} />,
  3: <FindInPage fontSize={"small"} />,
  4: <DataObject fontSize={"small"} />,
  5: <SportsScore fontSize={"small"} />,
};

function LaunchStepIconRoot(props: {
  completed?: boolean;
  active?: boolean;
  children: React.ReactNode;
  loading: boolean;
}): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor:
          props.completed || props.active ? "primary.main" : "primary.light",
        color: "secondary.light",
        width: 32,
        height: 32,
        fontSize: 16,
      }}
    >
      {props.completed ? (
        <Check fontSize={"small"} />
      ) : props.active && props.loading ? (
        <CircularProgress size={"1rem"} sx={{ color: "secondary.light" }} />
      ) : (
        props.children
      )}
    </Box>
  );
}

function LaunchStepIcon(props: StepIconProps): JSX.Element {
  const { active, completed } = props;
  const i = String(props.icon);
  return (
    <LaunchStepIconRoot
      loading={i !== "6" && i !== "1"}
      completed={completed}
      active={active}
    >
      {LAUNCH_STEPS_ICONS[i]}
    </LaunchStepIconRoot>
  );
}

const REV_LAUNCH_STEPS = {
  Pending: 0,
  PerformingAuth: 1,
  CheckingFiles: 2,
  PreparingMods: 3,
  GeneratingArgs: 4,
  Finished: 5,
};

function Launching(props: {
  profile: GameProfile;
  container: MinecraftContainer;
  server?: string;
}): JSX.Element {
  const classes = useStyles();
  const mountedBit = useRef<boolean>(true);
  const [warning, setWarning] = useState(false);
  const [status, setStatus] = useState(LaunchingStatus.PENDING);
  const [activeStep, setActiveStep] = useState(0);
  // eslint-disable-next-line prefer-const
  const currentEM = useRef<EventEmitter>();
  const [dry, setDry] = useState(false);
  const [secure, setSecure] = useState(false);
  const [noValidate, setNoValidate] = useState(false);
  const [reConfigureAccount, setReConfigureAccount] = useState(false);
  useEffect(() => {
    currentEM.current = new EventEmitter();
    return () => {
      currentEM.current?.removeAllListeners();
      currentEM.current = undefined;
    };
  }, []);
  useEffect(() => {
    mountedBit.current = true;
    return () => {
      mountedBit.current = false;
    };
  }, []);
  useEffect(() => {
    const fun = () => {
      setWarning(true);
    };
    window.addEventListener("mcFailure", fun);
    return () => {
      window.removeEventListener("mcFailure", fun);
    };
  }, []);

  const start = () => {
    setChangePageWarn(true);
    setStatus(LaunchingStatus.FINISHED);
    setActiveStep(5);
    setTimeout(() => {
      setChangePageWarn(false);
      setStatus(LaunchingStatus.PENDING);
      setActiveStep(0);
    }, 2000);
  };

  return (
    <Container className={classes.root}>
      {warning ? (
        <YNDialog
          onClose={() => {
            setWarning(false);
          }}
          onAccept={() => {
            jumpTo("/CrashReportDisplay");
            triggerSetPage("CrashReportDisplay");
          }}
          title={tr("ReadyToLaunch.WarnError.Title")}
          content={tr("ReadyToLaunch.WarnError.Description")}
          yes={tr("ReadyToLaunch.WarnError.Yes")}
          no={tr("ReadyToLaunch.WarnError.No")}
        />
      ) : (
        ""
      )}

      <Typography className={classes.text} gutterBottom>
        {props.server
          ? tr(
              "ReadyToLaunch.HintServer",
              `ID=${props.profile.id}`,
              `Container=${props.container.id}`,
              `Server=${props.server}`
            )
          : tr(
              "ReadyToLaunch.Hint",
              `ID=${props.profile.id}`,
              `Container=${props.container.id}`
            )}
      </Typography>
      <br />

      <Stepper
        alternativeLabel
        className={classes.stepper}
        activeStep={activeStep}
      >
        {LAUNCH_STEPS.map((s) => {
          return (
            <Step key={s}>
              <StepLabel StepIconComponent={LaunchStepIcon}>
                <Typography className={classes.textSP + " smtxt"}>
                  {tr("ReadyToLaunch.Status.Short." + s)}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <br />
      {/* Insert Here */}
      <br />
      {getBoolean("features.saying") ? <WaitingText /> : <br />}

      <Tooltip
        title={
          <Typography className={"smtxt"}>
            {status === LaunchingStatus.FINISHED
              ? tr("ReadyToLaunch.Kill")
              : tr("ReadyToLaunch.Start")}
          </Typography>
        }
      >
        <>
          <Fab
            color={"primary"}
            disabled={status !== LaunchingStatus.PENDING}
            onClick={() => {
              start();
            }}
          >
            {dry ? <FlashOn /> : <FlightTakeoff />}
          </Fab>
        </>
      </Tooltip>
      <br />
      {/* Advanced Options */}
      <Tooltip title={tr("ReadyToLaunch.DryLaunchDesc")}>
        <FormControlLabel
          control={
            <Checkbox
              color={"primary"}
              disabled={status !== "Pending"}
              checked={dry}
              onChange={(e) => {
                setDry(e.target.checked);
              }}
            />
          }
          label={
            <Typography color={"primary"}>
              {tr("ReadyToLaunch.DryLaunch")}
            </Typography>
          }
        />
      </Tooltip>
      <Tooltip title={tr("ReadyToLaunch.SecureLaunchDesc")}>
        <FormControlLabel
          control={
            <Checkbox
              color={"primary"}
              disabled={status !== "Pending"}
              checked={secure}
              onChange={(e) => {
                setSecure(e.target.checked);
              }}
            />
          }
          label={
            <Typography color={"primary"}>
              {tr("ReadyToLaunch.SecureLaunch")}
            </Typography>
          }
        />
      </Tooltip>
      <Tooltip title={tr("ReadyToLaunch.SelectAccountDesc")}>
        <FormControlLabel
          control={
            <Checkbox
              color={"primary"}
              disabled={status !== "Pending"}
              checked={reConfigureAccount}
              onChange={(e) => {
                setReConfigureAccount(e.target.checked);
              }}
            />
          }
          label={
            <Typography color={"primary"}>
              {tr("ReadyToLaunch.SelectAccount")}
            </Typography>
          }
        />
      </Tooltip>
      <Tooltip title={tr("ReadyToLaunch.NoValidateDesc")}>
        <FormControlLabel
          control={
            <Checkbox
              color={"primary"}
              disabled={status !== "Pending"}
              checked={noValidate}
              onChange={(e) => {
                setNoValidate(e.target.checked);
              }}
            />
          }
          label={
            <Typography color={"primary"}>
              {tr("ReadyToLaunch.NoValidate")}
            </Typography>
          }
        />
      </Tooltip>
      <br />
      <SpecialKnowledge />
      <SystemUsage />
    </Container>
  );
}

const LAST_ACCOUNT_TAB_KEY = "ReadyToLaunch.LastSelectedAccountType";
const LAST_YG_ACCOUNT_NAME = "ReadyToLaunch.LastSelectedYggdrasilName";
const ACCOUNT_CONFIGURED_KEY = "ReadyToLaunch.AccountConfigured";

function WaitingText(): JSX.Element {
  const [hint, setHint] = useState(randsl("ReadyToLaunch.WaitingText"));
  useEffect(() => {
    const timer = setInterval(() => {
      setHint(randsl("ReadyToLaunch.WaitingText"));
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Typography
      sx={{
        flexGrow: 1,
        fontSize: "medium",
        color: "secondary.main",
      }}
      gutterBottom
    >
      {hint}
    </Typography>
  );
}

function AskURLDialog(): JSX.Element {
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fun = () => {
      setOpen(true);
    };
    window.addEventListener("OpenAskUrlDialog", fun);
    return () => {
      window.removeEventListener("OpenAskUrlDialog", fun);
    };
  }, []);
  return (
    <ThemeProvider
      theme={
        isBgDark() ? ALICORN_DEFAULT_THEME_DARK : ALICORN_DEFAULT_THEME_LIGHT
      }
    >
      <Dialog
        open={open}
        onClose={() => {
          window.dispatchEvent(new CustomEvent("UrlAskCancelled"));
          setOpen(false);
        }}
      >
        <DialogTitle>{tr("ReadyToLaunch.LoginStepTitle")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{tr("ReadyToLaunch.LoginStep")}</DialogContentText>
          <br />
          <DialogContentText>{tr("ReadyToLaunch.URLEnter")}</DialogContentText>
          <TextField
            autoFocus
            margin={"dense"}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            type={"url"}
            spellCheck={false}
            color={"primary"}
            fullWidth
            variant={"outlined"}
            value={url}
          />
        </DialogContent>
        <DialogActions>
          <Button
            disabled={!url.includes("code")}
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("UrlAsked", { detail: url })
              );
              setUrl("");
              setOpen(false);
            }}
          >
            {tr("ReadyToLaunch.AcceptLogin")}
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

function SystemUsage(): JSX.Element {
  const [mem, setMem] = useState(0);
  const [totalMem, setTotalMem] = useState(0);
  useEffect(() => {
    const fun = async () => {
      setMem(await getFreeMemory());
      setTotalMem(await getTotalMemory());
    };
    const t = setInterval(fun, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}
      >
        <Box
          sx={{
            marginTop: "2rem",
            height: "0.2rem",
            width: `${(1 - mem / totalMem) * 100}%`,
            backgroundColor: "primary.main",
          }}
        />
        <Typography
          color={"primary"}
          sx={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}
        >
          &nbsp;
          {tr(
            "ReadyToLaunch.RAM",
            `Total=${Math.round((totalMem * 100) / 1073741824) / 100}`,
            `InUse=${Math.round(((totalMem - mem) * 100) / 1073741824) / 100}`
          )}
        </Typography>
      </Box>
    </>
  );
}
