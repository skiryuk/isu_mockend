export interface IAgentRegisterRequest {
  agentType: string;
  osType: string;
  deviceInfo?: string;
  appVersion: string;
}

export interface IAgentCheckRequest {
  agentId: string;
  appVersion: string;
}
