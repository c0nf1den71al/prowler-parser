import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const severities = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },
  {
    value: "critical",
    label: "Critical"
  }
]

export const statuses = [
  {
    value: "PASS",
    label: "Pass",
  },
  {
    value: "FAIL",
    label: "Fail",
    }
]

export const services = [{value:"accessanalyzer",label:"Access Analyzer"},{value:"account",label:"Account"},{value:"acm",label:"AMC"},{value:"apigateway",label:"API Gateway"},{value:"apigatewayv2",label:"API Gateway v2"},{value:"appstream",label:"App Stream"},{value:"athena",label:"Athena"},{value:"autoscaling",label:"Auto-Scaling"},{value:"awslambda",label:"AWS Lambda"},{value:"backup",label:"Backup"},{value:"cloudformation",label:"Cloud Formation"},{value:"cloudfront",label:"Cloud Front"},{value:"cloudtrail",label:"Cloud Trail"},{value:"cloudwatch",label:"Cloud Watch"},{value:"codeartifact",label:"Code Artifact"},{value:"codebuild",label:"codebuild"},{value:"cognito",label:"Cognito"},{value:"config",label:"Config"},{value:"directoryservice",label:"Directory Service"},{value:"dlm",label:"DLM"},{value:"documentdb",label:"Document DB"},{value:"drs",label:"DRS"},{value:"dynamodb",label:"Dynamo DB"},{value:"ec2",label:"EC2"},{value:"ecr",label:"ECR"},{value:"ecs",label:"ECS"},{value:"efs",label:"EFS"},{value:"eks",label:"EKS"},{value:"elasticache",label:"Elasticache"},{value:"elb",label:"ELB"},{value:"elbv2",label:"ELB v2"},{value:"emr",label:"EMR"},{value:"fms",label:"FMS"},{value:"glacier",label:"Glacier"},{value:"globalaccelerator",label:"Global Accelerator"},{value:"glue",label:"Glue"},{value:"guardduty",label:"Guard Duty"},{value:"iam",label:"IAM"},{value:"inspector2",label:"Inspector 2"},{value:"kms",label:"KMS"},{value:"macie",label:"Macie"},{value:"neptune",label:"Neptune"},{value:"networkfirewall",label:"Network Firewall"},{value:"opensearch",label:"Open Search"},{value:"organizations",label:"Organizations"},{value:"rds",label:"RDS"},{value:"redshift",label:"RedShift"},{value:"resourceexplorer2",label:"Resource Explorer 2"},{value:"route53",label:"Route53"},{value:"s3",label:"S3"},{value:"sagemaker",label:"SageMaker"},{value:"secretsmanager",label:"Secrets Manager"},{value:"securityhub",label:"Security Hub"},{value:"shield",label:"Shield"},{value:"sns",label:"SNS"},{value:"sqs",label:"SQS"},{value:"ssm",label:"SSM"},{value:"ssmincidents",label:"SSM Incidents"},{value:"trustedadvisor",label:"Trusted Advisor"},{value:"vpc",label:"VPC"},{value:"waf",label:"WAF"},{value:"wafv2",label:"WAF v2"},{value:"wellarchitected",label:"Well Architected"},{value:"workspaces",label:"Workspaces"}]