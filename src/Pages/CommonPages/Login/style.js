import Graph from "../../../Assets/images/graph.jpg";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 2,
    alignItems: "center",
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  grow: {
    flexGrow: 1
  },
  CustomHr: {
    border: "1px solid #e0e0e0",
    marginBottom: "5%"
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  MainEditer: {
    paddingTop: "4%",
    backgroundColor: "#fff"
  },
  RightEditer: {
    backgroundImage: `url(${Graph})`,
    backgroundRepeat: "repeat",
    backgroundSize: "60%",
    width: "100%",
    display: "block"
  },
  LeftEditer: { backgroundColor: "#f6f6f6" },
  LeftEditerInner: {
    margin: "5%",
    padding: "5%",
    backgroundColor: "#fff",
    width: "100%"
  },
  FabricThumbnailPreview: {
    display: "flex",

    "& img": {
      padding: "6px",
      width: "150px",
      border: "1px solid #e2e2e2"
    },
    "& svg": {
      padding: "10%",
      width: "150px",
      height: "113px !important",
      border: "1px solid #e2e2e2"
    }
  },
  Editer: {
    backgroundColor: "#fff",
    border: "20px solid #e0f1ff",
    height: "450px",
    width: "100%",
    margin: "5% 10%",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "none"
  },
  appBarBottom: {
    bottom: 0,
    top: "auto"
  },
  footerBtn: {
    boxShadow: "none",
    borderRadius: 0,
    lineHeight: "3.6",
    padding: "6px 42px"
  },
  BC1: {
    backgroundColor: "#5e5e63"
  },
  BC2: {
    backgroundColor: "#444446"
  },
  iconBtn: {
    padding: "20px 42px"
  },
  list: {
    width: 250
  },
  FabricIcon: {
    width: 92,
    border: "1px solid #e0e0e0",
    padding: "2%"
  },
  StampIcon: {
    width: 50
  },
  ColorPreview: {
    border: "1px solid #e0e0e0",
    height: "100% !important",
    padding: "2%",
    "& svg": {
      width: "100%",
      height: "100% !important"
    }
  },
  SketchPicker: {
    boxShadow: "none !important"
  },
  stampDetails: {
    width: "100%",
    marginLeft: "5%",
    marginTop: "2%",
    "& h6": {
      marginTop: "3%"
    }
  },
  inlineFlex: {
    display: "inline-flex"
  },
  loader: {
    height: "100%",
    width: "100%",
    position: "absolute",
    background: "rgba(255, 255, 255, 0.8117647058823529)",
    zIndex: "13000"
  },
  AddStampBtn: {
    marginTop: "-24px",
    marginLeft: "10px",
    "& svg": {
      width: "1em",
      height: "auto !important",
      padding: 0,
      border: "none",
      marginTop: "-5%"
    }
  },
  df: {
    display: "flex"
  }
});

export default styles;
