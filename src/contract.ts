import { PlatformPropsType } from "@1fe/shell";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HostPropsContract {
  // Define the properties that the host can pass to the widget
}

export type WidgetProps = {
  platform: PlatformPropsType;
  host?: HostPropsContract;
};
