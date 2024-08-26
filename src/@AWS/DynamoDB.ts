import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  GetCommandInput,
  GetCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
});

const docClient = DynamoDBDocumentClient.from(client);

export async function scanTable({ tableName }: { tableName: string }) {
  const params = {
    TableName: tableName,
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

export async function getRow({
  tableName,
  key,
}: {
  tableName: string;
  key: Record<string, any>;
}) {
  const params: GetCommandInput = {
    TableName: tableName,
    Key: key,
  };

  try {
    const command = new GetCommand(params);
    const data = await docClient.send(command);

    return data.Item;
  } catch (error) {
    console.log("ERRORRORORROORROORRORORORORORORORORORRO", error);
    console.log("data", error);
    console.error("Error getting item from DynamoDB:", error);
    throw new Error("Failed to fetch row data");
  }
}
