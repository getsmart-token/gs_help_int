---
title: Metakeep Integration process
description: >
  This document explains the scope of the integration of Metakeep with GetSmart
date: 2024-08-26
weight: 2
---

# Metakeep Integration process

![Metakeep Integration Process Flowchart](/images/metakeep_integration.png)





1. Metakeep Integration
2. Create Profile (New Change)
   1. Send OTP via API
   2. Verify OTP Form
   3. Verify OTP via API
   4. Verify Account Status
3. Login
   1. Add account verification condition
   2. Validate User Type
4. Send Profile On Chain
   1. Build Txn to put the user on chain
   2. Verify Transaction status
5. Buy Token
   1. Buy Token
   2. Verify Transaction Status
6. Badge
   1. CheckAllowance
   2. Give Approvals
   3. Create Badge
   4. Cancel Badge
   5. Reset Expiry Badge
   6. Publish Badge
   7. Apply For Badge
   8. Assigned Badge
   9. Claim Badge
7. Cron Job
   1. Expired Badge
   2. Expired Claim
   3. Burn Token
   4. Check Allowance
   5. Give Approval
8. Staking
   1. Check Allowance
   2. Give Approval
   3. Staking
   4. Unstake
   5. Claim Token
9. Asset Migration
   1. Production NFT from meta mask wallet to meta keep wallets
   2. Tokens

