import { Spin } from "antd";

interface LoadingSpinnerProps {
  fullscreen?: boolean;
}

export function LoadingSpinner({ fullscreen = false }: LoadingSpinnerProps) {
  if (fullscreen) {
    return (
      <div style={styles.fullscreen}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={styles.center}>
      <Spin />
    </div>
  );
}

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    padding: 24,
  },
  fullscreen: {
    position: "fixed" as const,
    inset: 0,
    backgroundColor: "rgba(255,255,255,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
};
