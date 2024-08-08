import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const docClient = DynamoDBDocumentClient.from(client);

export async function scanPeopleTable() {
  const params = {
    TableName: "people",
  };

  try {
    const command = new ScanCommand(params);
    const data = await docClient.send(command);
    return data.Items;
  } catch (error) {
    console.error("Error scanning DynamoDB:", error);
    throw new Error("Failed to fetch people data");
  }
}
