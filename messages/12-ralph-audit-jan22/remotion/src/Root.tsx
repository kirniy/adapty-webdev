import { Composition } from "remotion";
import { RalphAuditVideo } from "./RalphAuditVideo";
import { RalphDeepDive } from "./RalphDeepDive";
import { RalphShowcase } from "./RalphShowcase";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Original version - clean style (about bugs) */}
      <Composition
        id="RalphAuditVideo"
        component={RalphAuditVideo}
        durationInFrames={1350} // 45 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      {/* Deep dive version - kinetic style (about bugs) */}
      <Composition
        id="RalphDeepDive"
        component={RalphDeepDive}
        durationInFrames={1380} // 46 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      {/* SHOWCASE - Ralph's actual work (animations, magic, polish) */}
      <Composition
        id="RalphShowcase"
        component={RalphShowcase}
        durationInFrames={1570} // ~52 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
