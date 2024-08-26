// AWS
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

// ========================================================================================================

// ===============================================
// Get Secret
// ===============================================
export const getSecret = async ({ secretName }: { secretName: string }) => {
  // ===============================================
  // Secret Manager
  // ===============================================
  const secretsManagerClient = new SecretsManagerClient({
    region: process.env.AWS_REGION,
  });

  const command = new GetSecretValueCommand({ SecretId: secretName });
  const data = await secretsManagerClient.send(command);

  if (data.SecretString) {
    return JSON.parse(data.SecretString);
  } else {
    throw new Error("Invalid secret format");
  }
};
