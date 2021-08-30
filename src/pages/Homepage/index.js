import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { AvatarDefault, IC_Box, IC_Face, IC_Plus } from '../../assets';
import { Dashboard, ProfileUser } from '../../components/molecules';
import { breakpoints } from '../../utils/breakpoints';
import { StyledHomepage } from './styled';

const HomePage = () => {
  let { path } = useRouteMatch();
  const userState = useSelector((state) => state.userReducer);
  const [messages, setMessages] = useState([1, 2]);
  const [showContactInfo, setShowContactInfo] = useState(false);

  return (
    <StyledHomepage>
      <div className="container">
        <Switch>
          <Route exact path={path}>
            <aside>
              <Dashboard />
            </aside>
          </Route>
          <Route path={`/profile`}>
            <aside>
              <ProfileUser
                idUser={userState?.idUser}
                username={userState.name}
                avatar={userState.avatar}
                phone={userState.phone}
                biography={userState?.biography}
              />
            </aside>
          </Route>
        </Switch>
        <main>
          {messages.length === 0 && (
            <StyledEmptyChat>
              <p>Please select a chat to start messaging</p>
            </StyledEmptyChat>
          )}
          {messages.length > 1 && (
            <StyledMainContent>
              <StyledChatRoom>
                <div className="header-section">
                  <div className="contact-wrapper">
                    <div className="avatar">
                      <img src={AvatarDefault} alt="avatar" />
                    </div>
                    <div className="desc">
                      <h3>Username</h3>
                      <p>Online</p>
                    </div>
                  </div>
                  <div
                    className="icon-more"
                    onClick={() => {
                      return showContactInfo
                        ? setShowContactInfo(false)
                        : setShowContactInfo(true);
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#7E98DF"
                      />
                      <rect
                        x="17"
                        y="2"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#7E98DF"
                      />
                      <rect
                        x="2"
                        y="16"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#7E98DF"
                      />
                      <rect
                        x="17"
                        y="16"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#7E98DF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="chat-section">
                  <div className="chat others">
                    <img className="avatar" src={AvatarDefault} alt="user" />
                    <p className="message">Oh! Cool Send me photo</p>
                  </div>
                  <div className="chat me">
                    <p className="message">Fromm me</p>
                    <img className="avatar" src={AvatarDefault} alt="user" />
                  </div>
                </div>
                <div className="input-section">
                  <div className="input-wrapper">
                    <input type="text" placeholder="Type your message.." />
                    <div className="action-button-wrapper">
                      <div className="icon">
                        <img src={IC_Plus} alt="icon" />
                      </div>
                      <div className="icon">
                        <img src={IC_Face} alt="icon" />
                      </div>
                      <div className="icon">
                        <img src={IC_Box} alt="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </StyledChatRoom>
              <StyledContactInfo show={showContactInfo}>
                <div className="header">
                  <svg
                    onClick={() => {
                      return showContactInfo
                        ? setShowContactInfo(false)
                        : setShowContactInfo(true);
                    }}
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.20711 9.3271L9.22925 3.30496C9.24226 3.29283 9.2551 3.28044 9.26777 3.26777L9.97487 2.56066C10.5607 1.97487 10.5607 1.02513 9.97487 0.43934C9.38909 -0.146447 8.43934 -0.146447 7.85355 0.43934L7.52579 0.767105L7.52513 0.766442L0.732233 7.55933C-0.244077 8.53564 -0.244079 10.1186 0.732233 11.0949L7.14646 17.5091L7.52513 17.8878L7.85357 18.2162C8.43936 18.802 9.3891 18.802 9.97489 18.2162C10.5607 17.6304 10.5607 16.6807 9.97489 16.0949L9.64645 15.7664L9.26778 15.3878C9.26635 15.3863 9.2649 15.3849 9.26346 15.3835L3.20711 9.3271Z"
                      fill="#7E98DF"
                    />
                  </svg>
                  <h3 className="text-md-bold primary text-center">Username</h3>
                </div>
                <div className="profile-section">
                  <img src={AvatarDefault} className="avatar" alt="user" />
                </div>
                <div className="desc-section">
                  <div className="desc">
                    <h4 className="text-md-bold">Username</h4>
                    <p className="text-md-regular">Online</p>
                  </div>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1" fill="white">
                      <path d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V16C22 18.2091 20.2091 20 18 20H1C0.447716 20 0 19.5523 0 19V4Z" />
                    </mask>
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V16C22 18.2091 20.2091 20 18 20H1C0.447716 20 0 19.5523 0 19V4Z"
                      stroke="#7E98DF"
                      strokeWidth="4"
                      mask="url(#path-1-inside-1)"
                    />
                    <rect
                      x="5"
                      y="9"
                      width="12"
                      height="2"
                      rx="1"
                      fill="#7E98DF"
                    />
                    <rect
                      x="5"
                      y="5"
                      width="12"
                      height="2"
                      rx="1"
                      fill="#7E98DF"
                    />
                    <rect
                      x="5"
                      y="13"
                      width="12"
                      height="2"
                      rx="1"
                      fill="#7E98DF"
                    />
                  </svg>
                </div>
                <div className="desc-section">
                  <div className="desc">
                    <h4 className="text-md-bold">Phone number</h4>
                    <p className="text-md-regular">+375(29)9239003</p>
                  </div>
                </div>
                <div className="divider" />
              </StyledContactInfo>
            </StyledMainContent>
          )}
        </main>
      </div>
    </StyledHomepage>
  );
};

export default HomePage;

const StyledEmptyChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #848484;
  }
`;

const StyledMainContent = styled.div`
  /* ${breakpoints.lessThan('2xl')`
      background-color: yellow;
    `}
  ${breakpoints.lessThan('xl')`
      background-color: blue;
    `}
    ${breakpoints.lessThan('lg')`
      background-color: cyan;
    `}
    ${breakpoints.lessThan('md')`
      background-color: pink;
    `}
    ${breakpoints.lessThan('sm')`
      background-color: green;
    `}
    ${breakpoints.lessThan('xsm')`
      background-color: pink;
    `} */

  display: flex;
  flex-shrink: 1;
  height: 100vh;
  position: relative;
`;

const StyledChatRoom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  .header-section {
    top: 0;
    padding: 0 50px;
    background: #ffffff;
    position: absolute;
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .contact-wrapper {
      display: flex;
      gap: 1rem;
      align-items: center;
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
      .avatar {
        width: 64px;
        height: 64px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 20px;
        }
      }
    }
    .icon-more {
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }

  .chat-section {
    padding: 0 50px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 150px;
    gap: 1rem;
    .chat {
      display: flex;
      gap: 15px;
      .message {
        max-width: 350px;
        padding: 10px 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Rubik;

        ${breakpoints.lessThan('lg')`
          max-width: 200px; 
        `}
      }
      &.others {
        display: flex;
        flex-direction: row;

        .message {
          background: #7e98df;
          border-radius: 35px 35px 35px 10px;
          color: #ffffff;
        }
      }
      &.me {
        display: flex;
        justify-content: flex-end;

        .message {
          background: #ffffff;
          border-radius: 35px 10px 35px 35px;
        }
      }
      img {
        ${breakpoints.lessThan('lg')`
          display: none;
        `}
        height: 64px;
        width: 64px;
        object-fit: contain;
        border-radius: 20px;
      }
    }
  }
  height: 100%;
  .input-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 24px 50px;
    .input-wrapper {
      padding: 21px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fafafa;
      border-radius: 15px;
      input {
        border: 0;
        width: 100%;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #848484;
        background-color: transparent;
        &:focus {
          outline: none;
        }
      }
      .action-button-wrapper {
        display: flex;
        gap: 22px;
      }
    }
  }
`;

const StyledContactInfo = styled.div`
  background-color: #ffffff;
  padding: 40px 30px;
  width: 350px;
  border-left: 1px solid #e5e5e5;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  ${breakpoints.lessThan('lg')` 
    width: 250px; 
  `}
  .header {
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
    gap: 25px;
    svg {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .profile-section {
    text-align: center;
    .avatar {
      height: 84px;
      width: 84px;
      border-radius: 30px;
    }
  }
  .desc-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    .desc {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
  .divider {
    background: #f6f6f6;
    margin-top: 22px;
    height: 2px;
  }
`;
