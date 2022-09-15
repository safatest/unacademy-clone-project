import './Wrapper1.css'
import {styled} from '@mui/material/styles'

const StyledButton = styled('button')(`
    position: relative;
    border-color: #08bd80;
    border: none;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;
    width: 176px;
    height: 48px;
    min-height: 48px;
    color: #FFFFFF;
    user-select: none;
    background-color: #08bd80;
    transition: box-shadow 300ms ease-in-out,transform 300ms ease-in-out,background-color 300ms ease-in-out;
    width: auto;
    height: auto;
    padding: 18px 32px;
    font-size: 20px;
`);

const Wrapper1 = () => {
  return (
    <section className="w_container">
        <picture>
                <img className="image_container" src="https://unacademy.com/static/images/home/hero_banner_landing_new.svg" alt="Landing Banner"/>
        </picture>
        <div className="right"/>
        <div container className="text_container">
            <div class="animation_container">
                <div class="slide_in">
                    <div class="slider_container">
                        <div class="title">
                            <h2 className="main_text">India’s largest<br/>learning platform</h2>
                        </div>
                    </div>
                    <section className="cards_wrapper">
                        <div>
                            <a className="styled_anchor" href="/explore">
                                <StyledButton >Start learning</StyledButton>
                            </a>
                        </div>
                        <div className="popular_goals_wrapper">
                            <p className="sub_header">Popular goals</p>
                            <div class="popular_goals_container">
                                <h5 color="var(--color-text-primary)" class="css-179urxu-H5-PopularGoals e3x32mw4">UPSC CSE - GS</h5>
                                <h5 color="var(--color-text-primary)" class="css-179urxu-H5-PopularGoals e3x32mw4">IIT JEE</h5>
                                <h5 color="var(--color-text-primary)" class="css-179urxu-H5-PopularGoals e3x32mw4">NEET UG</h5>
                                <h5 color="var(--color-text-primary)" class="css-179urxu-H5-PopularGoals e3x32mw4">Bank Exams</h5>
                                <h5 color="var(--color-text-primary)" class="css-179urxu-H5-PopularGoals e3x32mw4">UPSC CSE - Optional</h5>
                                <h5 color="var(--color-text-primary)" class="css-179urxu-H5-PopularGoals e3x32mw4">CA Intermediate</h5>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Wrapper1