export type Severity = "debug" | "info" | "warning" | "error" | "critical";

export interface ILogMessageData {
  saverity: Severity;
  message: string;
  data?: any
}

const logger = (
  logData: ILogMessageData
) => {
  console.log(
    `Logging ${logData.saverity} to console`, 
    logData.message,
    logData.data,
    `runEnv: ${process.env.STAGE} to console`, 
  );
}

export default logger;