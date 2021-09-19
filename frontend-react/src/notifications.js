import React from "react";
import * as R from "ramda";
import { toast } from "react-toastify";

//   NOTIFICATION
const defaultNotificationConfig = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  newestOnTop: false,
};

export function warningNotification(title, message, config) {
  toast.warning(
    () => {
      return (
        <div className="notification-layout warning">
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
      );
    },
    { ...R.mergeDeepLeft(config, defaultNotificationConfig) }
  );
}

export function successNotification(title, message, config) {
  toast.success(
    () => {
      return (
        <div className="notification-layout success">
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
      );
    },
    { ...R.mergeDeepLeft(config, defaultNotificationConfig) }
  );
}

export function infoNotification(title, message, config) {
  toast.info(
    () => {
      return (
        <div className="notification-layout info">
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
      );
    },
    { ...R.mergeDeepLeft(config, defaultNotificationConfig) }
  );
}

export function errorNotification(title, message, config) {
  toast.error(
    () => {
      return (
        <div className="notification-layout error">
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
      );
    },
    { ...R.mergeDeepLeft(config, defaultNotificationConfig) }
  );
}

export function networkError() {
  toast.error(
    () => {
      return (
        <div className="notification-layout error">
          <h4>Connection error</h4>
          <p>Check your internet connection or try again later</p>
        </div>
      );
    },
    { ...defaultNotificationConfig }
  );
}

export function dangerNotification(title, message, config) {
  toast.error(
    () => {
      return (
        <div className="notification-layout error">
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
      );
    },
    { ...R.mergeDeepLeft(config, defaultNotificationConfig) }
  );
}
