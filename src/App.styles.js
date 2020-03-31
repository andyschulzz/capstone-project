import styled from 'styled-components/macro'

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;

  @media only screen and (min-device-width: 770px) {
    z-index: 3;
    width: 375px;
    height: 667px;
    margin-top: -24px;
  }
`

const DesktopView = styled.div`
  @media only screen and (min-device-width: 770px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #7893a3;
  }
`

const MobilFrame = styled.img`
  display: none;
  @media only screen and (min-device-width: 770px) {
    display: block;
    position: absolute;
    width: 390px;
    z-index: 2;
  }
`

const BackgroundLogo = styled.img`
  display: none;
  @media only screen and (min-device-width: 770px) {
    display: block;
    margin-top: -380px;
    margin-left: 440px;
    opacity: 0.1;
  }
`

export { AppGrid, DesktopView, MobilFrame, BackgroundLogo }
