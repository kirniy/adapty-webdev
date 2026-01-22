import { Composition } from "remotion";
import { DailyReportCinematic } from "./DailyReportCinematic";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DailyReportCinematic"
        component={DailyReportCinematic}
        durationInFrames={1800} // 60 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
