// https://i.ibb.co/zJdVXq1/madrid-resume-templates.webp

const styleMadrid = {
  common: {
    container: {
      padding: "48px",
      width: "100%",
      height: "100%",
    },
    header: {
      display: "flex",
      gap: "10px",
    },

    headerDivOne: {
      width: "400px",
      minHeight: "200px",
      maxHeight: "250px",
      borderRight: "10px solid #ffffff",
    },
    headerDivTwo: {
      padding: "30px",
      width: "100%",
    },
    body: {
      paddingTop: "15px",
    },

    personalInfoLabel: {
      color: "#002B18",
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: "35px",
    },
    sectionTitle: {
      backgroundColor: "black",
      padding: "5px 10px",
      // marginBottom: "30px",
      // marginTop: "20px",
    },
    commonMarginTop: {
      marginTop: "10px",
      marginBottom: "10px",
    },
    skills:{
      width:"100%",
      display:"flex",
      justifyContent:"start",
      alignItems:"center",
      height:"8px",
      backgroundColor:"blue",
      marginTop:"2px",
    },
    skillsLevel:{
      width: "20%",
      height: "100%",
      backgroundColor: "red",
      display: "block",
      marginRight: "5px",
    },
  },
  require: {
    theme: "#FFE14C",
    themeOptions: ["#FFE14C", "#FF9737", "#91D8E2", "#F6AFAD", "#6295EC"],
    skillLevel: true,
    skillLevelDisabled: true,
    personalInfo: {
      jobTitle: {
        color: "#002B18",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "20px",
        textAlign: "start",
      },
      firstName: {
        color: "#002B18",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 800,
        fontSize: "30px",
        textAlign: "start",
      },
      lastName: {
        color: "#002B18",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 800,
        fontSize: "30px",
        textAlign: "start",
      },
      email: {
        color: "#387BE8",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "18px",
        textAlign: "start",
      },
      phoneNumber: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
      },
      country: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
      },
      city: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
      },
      address: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
      },
      postalCode: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
      },
      drivingLicense: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
      },
      nationality: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
        // border: "1px solid red",
      },
      placeOfBirth: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
      },
      DateOfBirth: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "start",
      },
    },
    workExperience: {
      city: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
      description: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
      employer: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
      MontYear: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
      jobTitle: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
      startMontYear: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
    },
    skills: {
      label: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      level: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
    },
    professionalSummary: {
      summery: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
    },
    languages: {
      language: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      level: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
    },
    references: {
      name: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
      company: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
      phone: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
      email: {
        color: "",
        fontFamily: "",
        fontWeight: 0,
        fontSize: "",
        textAlign: "",
      },
    },
    educations: {
      school: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      degree: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      startMontYear: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      MontYear: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      city: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      description: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
    },
    socialProfiles: {
      label: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      link: {
        color: "black",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
    },
    sectionTitles: {
      personalInfoStyle: {
        color: "#fff",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      professionalSummaryStyle: {
        color: "#fff",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      workExperienceStyle: {
        color: "#fff",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      skillsStyle: {
        color: "#fff",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      languagesStyle: {
        color: "#fff",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      referencesStyle: {
        color: "#fff",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      educationsStyle: {
        color: "#fff",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
      socialProfilesStyle: {
        color: "#fff",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 600,
        fontSize: "15px",
        textAlign: "start",
      },
    },
  },
};

export default styleMadrid;
