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

export const services = [{value:"accessanalyzer",label:"accessanalyzer"},{value:"account",label:"account"},{value:"acm",label:"acm"},{value:"apigateway",label:"apigateway"},{value:"apigatewayv2",label:"apigatewayv2"},{value:"appstream",label:"appstream"},{value:"athena",label:"athena"},{value:"autoscaling",label:"autoscaling"},{value:"awslambda",label:"awslambda"},{value:"backup",label:"backup"},{value:"cloudformation",label:"cloudformation"},{value:"cloudfront",label:"cloudfront"},{value:"cloudtrail",label:"cloudtrail"},{value:"cloudwatch",label:"cloudwatch"},{value:"codeartifact",label:"codeartifact"},{value:"codebuild",label:"codebuild"},{value:"cognito",label:"cognito"},{value:"config",label:"config"},{value:"directoryservice",label:"directoryservice"},{value:"dlm",label:"dlm"},{value:"documentdb",label:"documentdb"},{value:"drs",label:"drs"},{value:"dynamodb",label:"dynamodb"},{value:"ec2",label:"ec2"},{value:"ecr",label:"ecr"},{value:"ecs",label:"ecs"},{value:"efs",label:"efs"},{value:"eks",label:"eks"},{value:"elasticache",label:"elasticache"},{value:"elb",label:"elb"},{value:"elbv2",label:"elbv2"},{value:"emr",label:"emr"},{value:"fms",label:"fms"},{value:"glacier",label:"glacier"},{value:"globalaccelerator",label:"globalaccelerator"},{value:"glue",label:"glue"},{value:"guardduty",label:"guardduty"},{value:"iam",label:"iam"},{value:"inspector2",label:"inspector2"},{value:"kms",label:"kms"},{value:"macie",label:"macie"},{value:"neptune",label:"neptune"},{value:"networkfirewall",label:"networkfirewall"},{value:"opensearch",label:"opensearch"},{value:"organizations",label:"organizations"},{value:"rds",label:"rds"},{value:"redshift",label:"redshift"},{value:"resourceexplorer2",label:"resourceexplorer2"},{value:"route53",label:"route53"},{value:"s3",label:"s3"},{value:"sagemaker",label:"sagemaker"},{value:"secretsmanager",label:"secretsmanager"},{value:"securityhub",label:"securityhub"},{value:"shield",label:"shield"},{value:"sns",label:"sns"},{value:"sqs",label:"sqs"},{value:"ssm",label:"ssm"},{value:"ssmincidents",label:"ssmincidents"},{value:"trustedadvisor",label:"trustedadvisor"},{value:"vpc",label:"vpc"},{value:"waf",label:"waf"},{value:"wafv2",label:"wafv2"},{value:"wellarchitected",label:"wellarchitected"},{value:"workspaces",label:"workspaces"}]