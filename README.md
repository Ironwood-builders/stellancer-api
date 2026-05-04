Stellancer 🚀
Instant, Low-Cost Freelancer Payouts Powered by Stellar

Stellancer bridges the gap between global freelancers and seamless cross-border payments — using Stellar's speed, Soroban smart contracts, and USDC stablecoin rails to settle payments in under 10 seconds for under 1% fee.


🗂️ Repository Structure
This project is split into three focused repositories:
RepoDescriptionStackstellancer-webFreelancer dashboard & platform UINext.js, React, TypeScript, Tailwindstellancer-apiPayout API, webhooks, wallet managementNode.js, NestJS, PostgreSQL, Redisstellancer-contractsEscrow & payout smart contractsSoroban (Rust), Stellar SDK

🧭 Product Vision
Global freelancers face delayed settlements, excessive fees, and broken cross-border payout infrastructure. Stellancer solves this by:

Settling payouts in < 10 seconds via Stellar
Charging ≤ 1% fee — far below traditional wire transfers
Abstracting all blockchain complexity from end users
Supporting both custodial (beginner-friendly) and non-custodial wallets
Providing fiat on/off-ramps via bank and mobile money integrations (OPay, MTN MoMo, etc.)


👥 Target Users
Freelancers & Contributors

Individual contractors paid via Stellancer wallets
DAO contributors receiving recurring or milestone-based payouts

Platform Customers

Freelance marketplaces integrating the Payout API
Remote-first companies paying global teams


✨ Core Features
Freelancer Wallet

Custodial & non-custodial wallet support
USDC on Stellar (Stellar Anchor Protocol)
One-click fiat withdrawal to bank or mobile money

Payout API

Batch payouts to multiple wallets in one transaction
Escrow creation and milestone-based release
Webhook notifications for payout events

Fiat Rails

Bank transfer integrations (Africa-first corridors)
Mobile money support (MTN, OPay, M-Pesa)


🏗️ Architecture Overview
┌─────────────────────────────────────────────────────────┐
│                    stellancer-web                        │
│        Next.js · React · TypeScript · Tailwind          │
└────────────────────┬────────────────────────────────────┘
                     │ REST / WebSocket
┌────────────────────▼────────────────────────────────────┐
│                    stellancer-api                        │
│         NestJS · PostgreSQL · Redis · Stellar SDK       │
└────────────────────┬────────────────────────────────────┘
                     │ Soroban RPC / Stellar Horizon
┌────────────────────▼────────────────────────────────────┐
│                stellancer-contracts                      │
│             Soroban (Rust) · Stellar Network            │
└─────────────────────────────────────────────────────────┘

🗺️ Roadmap
Phase 1 — Core (Months 0–3)

 Freelancer wallet (custodial)
 Single USDC payout flow
 One fiat off-ramp integration
 Basic escrow contract (Soroban)
 Web dashboard MVP

Phase 2 — Scale (Months 3–6)

 Payout API (public, key-authenticated)
 Batch payout support
 Webhook system
 Mobile app (React Native)
 Additional fiat corridors

Phase 3 — Advanced (Months 6–12)

 Non-custodial wallet support
 Multi-asset support
 Premium analytics dashboard
 Embedded financial services
 Multi-chain bridge support


💰 Monetization
StreamDetailsPayout fee0.5–1% per transactionFX spreadOn fiat conversionSaaS / APIMonthly subscription for platform customersAnalyticsPremium reporting (Phase 3)

🔐 Security & Compliance

Smart contract audits before mainnet deployment
Regulatory compliance via licensed partner anchors
Real-time transaction monitoring
Custodial key management with HSM


🧑‍💻 Team
RoleResponsibilityProduct ManagerRoadmap, specs, stakeholder alignmentFrontend Engineersstellancer-webBackend Engineersstellancer-apiBlockchain Engineerstellancer-contractsDevOpsInfrastructure, CI/CD, monitoringCompliance AdvisorRegulatory alignment, KYC/AML

📦 Getting Started
Prerequisites

Node.js >= 18
Rust (for contracts)
Docker & Docker Compose
Stellar testnet account

Clone All Repos
bashgit clone https://github.com/your-org/stellancer-web
git clone https://github.com/your-org/stellancer-api
git clone https://github.com/your-org/stellancer-contracts
Environment Setup
Each repo contains its own .env.example. Copy and configure:
bashcp .env.example .env
Refer to each repo's individual README for detailed setup instructions.

📄 License
MIT © Stellancer


Built with ❤️ on Stellar — for freelancers who deserve to get paid fast.