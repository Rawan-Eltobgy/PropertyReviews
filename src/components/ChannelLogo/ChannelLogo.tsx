import React from "react";
import AIRBNB from "../../assets/svg/AIRBNB.svg";
import BOOKINGCOM from "../../assets/svg/BOOKINGCOM.svg";
import HOLIDU from "../../assets/svg/HOLIDU.svg";

function ChannelLogo(channel: any) {
  console.log("channel: ", channel.channel, typeof channel);
  const renderSwitch = (channel: any) => {
    switch (channel.channel) {
      case "AIRBNB":
        return <img src={AIRBNB} alt="sourceLogo" />;
      case "HOLIDU":
        return <img src={HOLIDU} alt="sourceLogo" />;
      case "BOOKINGCOM":
        return <img src={BOOKINGCOM} alt="sourceLogo" />;
    }
  };
  return <>{renderSwitch(channel)}</>;
}

export default ChannelLogo;
