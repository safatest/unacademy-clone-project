import './Header.css'
import { styled } from '@mui/material/styles';

const StyledButton = styled('button')(`
position: relative;
border: none;
-webkit-box-pack: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
-webkit-box-align: center;
align-items: center;
cursor: pointer;
border-radius: 6px;
width: 80px;
height: 40px;
min-height: 40px;
color: white;
-webkit-user-drag: none;
user-select: none;
background-color: #08bd80;
transition: box-shadow 300ms ease-in-out 0s, 
            transform 300ms ease-in-out 0s, 
            background-color 300ms ease-in-out 0s;
grid-column: 23 / 25;
align-self: center;
display: flex;
    select {
        text-transform: none;
    }
    
    
`);
const Header = () => {
  return (
    <header container className="header_container">
        <div className="header_parent">
            <a className="logo_link" href="/">
                <div class="css-1relnd2-LogoContainer esxnkqx0">
                    <span className="span1">
                        <span className="span2">
                            <img className="logo_back_img" alt=""
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27161%27%20height=%2724%27/%3e"/>
                        </span>
                        <img className="logo_img" alt="Company Logo" data-analytics="global" src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&amp;w=384" decoding="async" data-nimg="intrinsic"/>
                    </span>
                </div>
            </a>
            <div class="right_content_wrapper">
                <StyledButton aria-label="Login">
                    Login
                </StyledButton>
            </div>
        </div>
    </header>
  )
}
export default Header