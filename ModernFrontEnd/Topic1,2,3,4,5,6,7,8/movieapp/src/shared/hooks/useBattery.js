import { useEffect, useState } from "react";

export const useBattery = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [charge, setCharge] = useState(false);

  useEffect(() => {
    (async () => {
      const batteryObj = await window.navigator.getBattery();
      setBatteryLevel(batteryObj.level * 100);
      setCharge(batteryObj.charging);
    })();
  }, []);

  return {
    batteryLevel,
    charge,
  };
};
