import  "../App.css"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const SocialIcons = () => {


 

  return (
    <div style={{display:"flex" ,width:"70%",margin:"3rem auto",justifyContent:"space-evenly"}}>
        <FacebookOutlinedIcon fontSize="large" className="fb" />
        <p  className="gog" > G</p>
         <LinkedInIcon fontSize="large" className="linkd" />
        <GitHubIcon fontSize="large" className="git"  />
    </div>
  );
};

export default SocialIcons;
