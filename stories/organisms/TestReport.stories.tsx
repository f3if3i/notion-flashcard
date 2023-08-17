import type { Meta, StoryObj } from "@storybook/react"
import TestReport from "../../components/organisms/TestReport/index"

const meta: Meta<typeof TestReport> = {
    title: "Organisms/TestReport",
    component: TestReport,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TestReport>;

export const Primary: Story = {
    name: "default",
    args: {
        databaseInfo: {
            "name": "AWS Applications",
            id: "sdfadf"
        },
        userInfo: {
            userName: "Amy Harvey",
            userId: "sdfadf"
        },
        score: 2,
        testArray: [
            {
                "name": "AWS Applications Migration service(MGN)",
                "options": [
                    "AWS control Tower",
                    "AWS Elastic Beanstalk",
                    "AWS GuradDuty",
                    "AWS Applications Migration service(MGN)"
                ],
                "description": "primary migration service recommended for lift and shift migrations to AWS. It can. migrate on-premises workloads to AWS."
            },
            {
                "name": "Amazon WorkSpaces",
                "options": [
                    "Amazon DynamoDB stream",
                    "Amazon WorkSpaces",
                    "AWS Outposts",
                    "Technical Account Management"
                ],
                "description": "provide desktop environments"
            },
            {
                "name": "Amazon Textract",
                "options": [
                    "AWS AppSync",
                    "AWS Partner Network",
                    "VPC Peering",
                    "Amazon Textract"
                ],
                "description": "used to extract printed text, handwriting, etc"
            },
            {
                "name": "AWS Partner Network",
                "options": [
                    "Amazon EFS",
                    "Amazon Kinesis",
                    "Amazon OpenSearch",
                    "AWS Partner Network"
                ],
                "description": "APN: focused on heloping partners build successful aws-based businesses to derive superb customer experiences"
            },
            {
                "name": "Amazon DocumentDB",
                "options": [
                    "Amazon Aurora",
                    "Bastion Host",
                    "Amazon DocumentDB",
                    "AWS Direct Connect"
                ],
                "description": "a fully-managed document database service that supports MongoDB workloads"
            },
            {
                "name": "AWS green grass",
                "options": [
                    "AWS green grass",
                    "AWS Wavelength",
                    "AWS Directory Services",
                    "Amazon AppStream 2.0"
                ],
                "description": "TBD"
            },
            {
                "name": "Amazon Aurora",
                "options": [
                    "AWS Trusted Advisor",
                    "Amazon CloudFront",
                    "Amazon Aurora",
                    "AWS systems Manager"
                ],
                "description": "fully-managed by Amazon Relational Databse Service, which automates time-consuming administration tasks like harware provisioning, database setup, patching and backups without any manual intervention from you.\n- a MySQL and PostgreSQL-compatible relational database built for the cloud that combines the performance and availability of traditional enterprise databases with simplicity and cost-effectiveness of open source databases."
            },
            {
                "name": "AWS Lambda",
                "options": [
                    "AWS Directory Services",
                    "Amazon Lex",
                    "AWS Lambda",
                    "Amazon Redshift"
                ],
                "description": "an event-driven, serverless computing platform"
            },
            {
                "name": "Amazon EC2",
                "options": [
                    "AWS Firewall Manager",
                    "AWS Snowball Edge",
                    "Amazon EC2",
                    "Amazon Redshift"
                ],
                "description": "has Security Group as its firewall\n- zonal service\n- Spot Instaces: take advantage of unused EC2 capacity and is available at up to a 90% discount\n- Standard Reservced instance: provides up to 75% of discount\n- Convertible reserved instance: doesn’t utilize unused ec2 capacity and costs more thant standard reserved instance with discound of up to 54% and can be purchased for a 1-year or 3-year term.\n- Delicated hosts: its a physical EC2 server dedicated for your use.(it allows you to use your existing per-socket, per-core, or per-VM-software licenses such as Microsoft Windows Server)\ncan lounch database that has responsibility and management of the guest operation system.\n"
            },
            {
                "name": "Amazon EFS",
                "options": [
                    "AWS CodeDeploy",
                    "Amazon WorkDocs",
                    "Amazon VPC",
                    "Amazon EFS"
                ],
                "description": "- Reginal service storing data within and across multiple Availability Zones for high availability and durability."
            },
            {
                "name": "AWS Amplify",
                "options": [
                    "AWS Amplify",
                    "Amazon Polly",
                    "Amazon Transcribe",
                    "AWS IAM Group"
                ],
                "description": "a set of tools and frameworks that acdelerate the development of mobile and web applications on AWS"
            },
            {
                "name": "Amazon DynamoDB",
                "options": [
                    "AWS Cost Explorer",
                    "AWS Migration Hub",
                    "Amazon DynamoDB",
                    "AWS Personal Health Dashboard"
                ],
                "description": "fully-managed database service of NoSQL"
            },
            {
                "name": "AWS Global Accelerator",
                "options": [
                    "AWS Global Accelerator",
                    "AWS IAM Group",
                    "AWS Discussion Forums",
                    "AWS Snowball Edge"
                ],
                "description": "imporces the availability and performance of your applications with local or global users."
            },
            {
                "name": "Amazon AppStream 2.0",
                "options": [
                    "Amazon CloudWatch",
                    "Amazon AppStream 2.0",
                    "AWS CloudFormation",
                    "AWS Batch"
                ],
                "description": "a fully manged application streaming services that provides users with instant access to their desktop applications from anywhere"
            },
            {
                "name": "AWS Migration Hub",
                "options": [
                    "AWS Migration Hub",
                    "AWS Trusted Advisor",
                    "Technical Account Management",
                    "Amazon CloudWatch"
                ],
                "description": "can only monitor applications migrations"
            },
            {
                "name": "AWS Discussion Forums",
                "options": [
                    "AWS Discussion Forums",
                    "AWS Data Pipeline",
                    "AWS Resource Group",
                    "Bastion Host"
                ],
                "description": "you can post operational issues or technical questiosn at AWS Discuession Forums and get assistance from the AWS community"
            },
            {
                "name": "AWS Resource Access Manager",
                "options": [
                    "Amazon Lex",
                    "APN Technology Partners",
                    "AWS Resource Access Manager",
                    "Amazon DynamoDB Accelerator(DAX)"
                ],
                "description": "securely share your resources across your AWS accounts"
            },
            {
                "name": "AWS Outposts",
                "options": [
                    "AWS Resource Group",
                    "AWS Artifact",
                    "AWS Outposts",
                    "AWS Directory Services"
                ],
                "description": "a fully managed services that extends AWS infrastructure to virtually any data center, co-location space or on-premises faccility"
            },
            {
                "name": "AWS systems Manager",
                "options": [
                    "AWS systems Manager",
                    "AWS Snowmobile",
                    "AWS Data Exchange",
                    "AWS Firewall Manager"
                ],
                "description": "provides a unified user interface so you can view operational data from multiple AWS services."
            },
            {
                "name": "AWS CodeDeploy",
                "options": [
                    "Amazon Kinesis Data Streams",
                    "AWS control Tower",
                    "AWS Data Pipeline",
                    "AWS CodeDeploy"
                ],
                "description": "a deployment service that automates application deployments to Amazon EC2 instances, op-premises instances, lambda functions or ECS services."
            }
        ],
        selectedOptions: ["AWS Data Exchange", "AWS CodeDeploy", "Amazon CloudWatch", "Amazon Lex", "APN Technology Partners", "AWS Directory Services", "AWS Data Exchange", "AWS CodeDeploy", "Amazon CloudWatch", "Amazon Lex", "APN Technology Partners", "AWS Directory Services", "AWS Data Exchange", "AWS CodeDeploy", "Amazon CloudWatch", "Amazon Lex", "APN Technology Partners", "AWS Directory Services", "AWS Data Exchange", "AWS CodeDeploy"],

    },
}

