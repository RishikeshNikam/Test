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
  RightEditer: { backgroundColor: "#fff", width: "100%" },
  LeftEditer: { backgroundColor: "#f6f6f6" },
  LeftEditerInner: {
    margin: "5%",
    padding: "5%",
    backgroundColor: "#fff",
    width: "100%"
  },
  FabricThumbnailPreview: {
    "& img": {
      width: "150px",
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
  }
});

export default styles;
