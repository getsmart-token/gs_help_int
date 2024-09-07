---
title: "Blue-Green Workflow Diagram"
linkTitle: "Blue-Green Workflow"
weight: 30
description: >
  Blue-Green deployment strategy for the GetSmart Token Project's Internet Architecture.
---

Blue-Green deployment is a technique that reduces downtime and risk by running two identical production environments called Blue and Green.

```mermaid
graph TD
    LB[Load Balancer]
    
    subgraph "Blue Environment"
    BF[Blue Frontend]
    BA[Blue API Gateway]
    BS[Blue Backend Services]
    BDB[(Blue Database)]
    end
    
    subgraph "Green Environment"
    GF[Green Frontend]
    GA[Green API Gateway]
    GS[Green Backend Services]
    GDB[(Green Database)]
    end
    
    U[Users]
    BC[Blockchain Node]
    IPFS[IPFS Node]
    
    U -->|Access| LB
    LB -->|Route Traffic| BF
    LB -.->|Inactive Route| GF
    
    BF -->|API Calls| BA
    BA -->|Routes Requests| BS
    BS -->|Reads/Writes| BDB
    BS -->|Interacts| BC
    BS -->|Uploads/Retrieves| IPFS
    
    GF -.->|API Calls| GA
    GA -.->|Routes Requests| GS
    GS -.->|Reads/Writes| GDB
    GS -.->|Interacts| BC
    GS -.->|Uploads/Retrieves| IPFS
    
    style LB fill:#f9f,stroke:#333,stroke-width:2px
    style BF fill:#ddf,stroke:#333,stroke-width:2px
    style GF fill:#ddf,stroke:#333,stroke-width:2px
    style BS fill:#bfb,stroke:#333,stroke-width:2px
    style GS fill:#bfb,stroke:#333,stroke-width:2px
    style BC fill:#fdd,stroke:#333,stroke-width:2px
    style IPFS fill:#dfd,stroke:#333,stroke-width:2px

