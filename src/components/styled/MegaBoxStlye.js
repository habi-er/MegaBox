import styled from "styled-components";

export const MegaBoxContainer = styled.div`
  &.MegaBox {
    width: 100%;
    padding: 0 200px;
    box-sizing: border-box;
    margin: 100px auto;
    color: #fff;
    h1 {
      text-align: center;
      margin-bottom: 40px;
    }
  }
`;
export const MegaBoxMenuListContainer = styled.ul`
  &.MegaBoxMenuList {
    display: flex;
    margin-bottom: 50px;
    li {
      line-height: 40px;
      font-size: 20px;
      border: 1px solid #fff;
      border-radius: 10px;
      width: 150px;
      height: 40px;
      text-align: center;
      margin-right: 20px;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;

export const MegaBoxListContainer = styled.ul`
  &.MegaBoxList {
    display: flex;
    flex-wrap: wrap;
    li {
      border: none;
      width: 243.6px;
      position: relative;
      margin: 1.6%;
      &::after {
        content: "";
        width: 0;
        height: 0;
        display: block;
        border-bottom: 25px solid transparent;
        border-top: 25px solid rgb(255, 0, 0);
        border-left: 25px solid rgb(255, 0, 0);
        border-right: 25px solid transparent;
        position: absolute;
        left: 0;
        top: 0;
        color: #000;
      }
      &::before {
        content: attr(data-id);
        width: 30px;
        height: 30px;
        color: #fff;
        position: absolute;
        z-index: 1;
        left: 10px;
        top: 0;
        font-size: 18px;
      }
      .poster {
        display: block;
        width: 243.6px;
        height: 348px;
        overflow: hidden;
        position: relative;
        &::before {
          position: absolute;
          top: 0;
          left: -100%;
          z-index: 2;
          display: block;
          content: "";
          width: 50%;
          height: 100%;
          background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
          background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
          -webkit-transform: skewX(-25deg);
          transform: skewX(-25deg);
        }
        &:hover::before {
          -webkit-animation: shine 0.75s;
          animation: shine 0.75s;
        }
        @-webkit-keyframes shine {
          100% {
            left: 125%;
          }
        }
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        img {
          width: 243.6px;
          height: 348px;
          margin-bottom: 20px;
          transition: 0.5s;
          cursor: pointer;
        }
      }
      .age-limit {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        img {
          width: 40px;
          height: 40px;
          margin-bottom: 0;
          margin-right: 5px;
        }
        h3 {
          font-size: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .second {
        margin-bottom: 10px;
        .salesShare {
          margin-right: 15px;
          position: relative;
          &::after {
            content: "";
            display: inline-block;
            width: 1px;
            height: 12px;
            background: #fff;
            position: absolute;
            top: 50%;
            right: -10px;
            transform: translateY(-50%);
          }
        }
      }
      strong {
        font-size: 14px;
        em {
          font-size: 16.5px;
          font-weight: 500;
        }
      }
      .third {
        display: flex;
        .like {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32%;
          height: 40px;
          border: 1px solid #dcdcdc;
          border-radius: 5px;
          margin-right: 3px;
          transition: 0.3s;
          cursor: pointer;
          &:hover {
            background: #fff;
            i {
              color: red;
              transform: scale(1.2);
            }
            em {
              color: #000;
            }
          }
          i {
            font-size: 18px;
            line-height: 0;
            margin-right: 3px;
          }
          em {
            font-size: 14px;
          }
        }
        .ticketing {
          width: 32%;
          height: 40px;
          background: transparent;
          color: #fff;
          text-align: center;
          line-height: 40px;
          border: 1px solid #dcdcdc;
          border-radius: 5px;
          margin-right: 3px;
          transition: 0.3s;
          cursor: pointer;
          &:hover {
            background: #fff;
            color: #000;
          }
          &.on {
            width: 68%;
          }
        }
        .imax {
          width: 32%;
          height: 40px;
          background: blue;
          border-radius: 3px;
          text-align: center;
          &:hover {
            background: #fff;
          }
          img {
            width: 50px;
            height: 40px;
          }
          &.on {
            display: none;
          }
        }
      }
    }
  }
`;

export const MegaBoxFormContainer = styled.form`
  & {
    padding-bottom: 20px;
    margin-bottom: 20px;
    text-align: center;
    input {
      width: 400px;
      height: 30px;
      border: 1px solid #dcdcdc;
      padding: 3px 25px;
      margin-bottom: 80px;
      box-sizing: border-box;
    }
    button {
      width: 60px;
      vertical-align: middle;
      height: 30px;
      background: rgb(30, 29, 29);
      i {
        color: #fff;
      }
    }
  }
`;
export const MegaBoxModalContainer = styled.div`
  &.modal {
    .for-bg {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background: #000;
      opacity: 0.7;
    }
    .popup {
      display: flex;
      width: 80%;
      background: rgb(59, 59, 59);
      background: linear-gradient(267deg, rgba(59, 59, 59, 1) 0%, rgba(0, 0, 0, 1) 69%);
      border: 3px solid #fff;
      box-shadow: 1px 1px 30px #999;
      padding: 100px 0px;
      box-sizing: border-box;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      & > span {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        i {
          font-size: 36px;
        }
        &:hover {
          i {
            color: darkgrey;
          }
        }
      }
      .left {
        padding: 0 20px;
      }
      .right {
        width: 50%;
        padding: 0 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        h3 {
          font-size: 28px;
          margin-bottom: 15px;
          text-align: center;
          margin-bottom: 30px;
          img {
            width: 250px;
            height: auto;
            object-fit: contain;
          }
        }
        span {
          display: inline-block;
          font-size: 16px;
          color: #999;
          margin-bottom: 15px;
          padding: 0 5px;
          box-sizing: border-box;
          &:nth-of-type(1) {
            border: 1px solid #999;
            position: relative;
            margin-right: 10px;
            &:after {
              position: absolute;
              right: -10px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          &:nth-of-type(3) {
            &:after {
              display: none;
            }
          }
          &:nth-of-type(4) {
            margin-right: 10px;
            padding: 0;
            &:after {
              display: none;
            }
          }
          &::after {
            content: "";
            display: inline-block;
            width: 1.5px;
            height: 12px;
            background: #999;
            margin-left: 10px;
          }
        }
        strong {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          font-size: 16px;
          margin-bottom: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
`;
