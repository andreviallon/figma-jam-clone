export enum Platform {
  MAC = "Mac",
  WINDOWS = "Windows",
}

export const isMacOS = (): boolean => {
  return !!navigator.userAgent.match(Platform.MAC);
};
