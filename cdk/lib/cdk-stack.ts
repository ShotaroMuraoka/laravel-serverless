import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import { ServerlessLaravel } from 'cdk-serverless-lamp';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ServerlessLaravel(this, 'ServerlessLaravel', {
      brefLayerVersion: 'arn:aws:lambda:ap-northeast-1:209497400698:layer:php-74-fpm:13',
      laravelPath: path.join(__dirname, '../../codebase'),
    });
  }
}