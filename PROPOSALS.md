# Proposals for production readiness

## Enhance (refactor) code

Not every day I write code in Typescript, in fact, it's been ages since last time! So there must be many areas we can tackle to improve.

Besides language specifics, I would consider the following in the future:

- fix dependencies and clarify the environment more clearly (for example, NodeJS version, which OS)
- or use something like Dockerfile or Nix to enforce that
- ability to set custom ports via environment variables
- cache the result to save bandwidth and increase the performance
- decouple components from each other by introducing interface and dependency injection
- more unit tests for edge cases
- add integration tests to ensure it communicates properly via API
- introduce code linter and code formatter to leave a little room for ambiguity and aim for fewer toils on detecting the possible issues manually

## Persistence layer

Currently, the employees' data is saved as JSON, and countries' data is fetched on-demand.

And saving data as a simple file (in a single machine) is not a great way for even with these few reasons:
- it's not a robust process to update data especially simultaneously with multiple processes
- with multiple machines, which one to choose to store it?

Fetching the data on demand (from a third-party data store) is also not great for even with these few reasons:
- no need to get fresh data every single time when the event of data being refreshed is rare
- no guarantee on the third-party API to be up all the time.

There are relations mappable to each other like Employee and Country so we should consider introducing an RDBMS like Postgresql.

## Security & Authentication

This app is missing the handling of HTTPS but I wouldn't add terminating SSL/TSL logics in this app directly.
Instead, we should consider using them in a "front" layer like HTTPS gateway which could be either of these:
- an Nginx process
- AWS ALB
- Kubernetes Ingress

I would consider using JWT to authenticate users to help maintain the app stateless as stated at https://12factor.net/processes.


## Infrastructure

Assuming utilising cloud IaaS is not an issue, I would consider following for underlying infrastructure to support the app to be stable and scalable to react to ever-changing demands/growth.

### Lambda
Good if we want to "forget" about the burden of scaling and anything outside of the perspective of NodeJS.

### Fargate
Good if managing our own Dockerfile make sense,
At the moment I don't have much information about this

### Kubernetes
Good if other apps are already running on a k8s cluster and need easy inter-communications.


## System architecture

### Base components
We will also need to configure the network via VPC (subnets, internet gateways, load balancers, etc) with consideration of (cost/performance) efficiency and security in mind.
We might introduce event-driven architectures via using Kafka (or SNS, MKS, etc) to help the API remain robust with high demands of requests.
Introducing Redis would allow caching easier and cheaper.
We can begin using a database via RDS as a start.

### Observability
We also would like to monitor the services via logging and metrics and tracings.
Popular choices for that purpose are ELK, AWS Cloudwatch, Prometheus, Grafana.
And of course setting up appropriate alerts to email, slack, pager duty would help engineers to detect abnormal behaviors early to react on that.


### CI/CD
We also would want to establish robust CI/CD to make build/delivery less painful so overall to increase service health and maintainability and decrease MTTR (Mean time to Respond). I would go with GitOps methodology like FluxCD for delivery and Github Actions for CI purposes.

Later on, we could consider introducing canary deployments and automated rollback on detected failures on the latest deployments.

### Visibility & Workability
Also last but not least, increasing visibility of how the system works as a hole for engineers would smooth out the experience of developments and incident responses. That would require (discoverable) documentations, toolings, run-books, etc.

The system can be infinitely complex, so should anticipate that changes all the time, however the simpler the better so recording the proposals/rationale every time for events of changes would be ideal and it would not only benefit the new members but also everyone to deal with future maintenance and changes.
