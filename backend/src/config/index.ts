export const config = {
  port: 5000,
  nodeEnv: 'development',
  jwtSecret: 'cortexai_default_session_salt',
  jwtExpiresIn: '24h',
  corsOrigin: '*',
  systemName: 'CortexAI OS Enterprise Gateway',
  guardrailsActive: true
};
