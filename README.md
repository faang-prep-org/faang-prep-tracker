# Interview Preparation Platform - Project Specification

## 📦 Project Description

You'll build a multi-user Interview Preparation & Practice Platform that
allows developers to: - Practice DSA problems and system design
questions - Schedule mock interviews with peers - Track progress and
performance - Get personalized recommendations for what to practice next

This app will simulate features you might find in a startup product ---
user management, scheduling, analytics, and recommendation logic --- so
it will feel real-world but still be small enough to build
incrementally.

## 💡 Core Features

1.  User Accounts (candidates, interviewers, admins)
2.  Problem Library with difficulty, topics, and solution explanations
3.  Mock Interview Scheduling (peer-to-peer matching system)
4.  Progress Tracking & Analytics (e.g., success rate, topic mastery)
5.  Recommendation Engine (suggests problems based on weaknesses)
6.  Notes & Solution History for each attempted problem

## 📜 User Stories

### Authentication & User Management

-   As a user, I can register with an email/password or sign in with
    GitHub/Google.
-   As an admin, I can deactivate user accounts.
-   As a user, I can update my profile (name, role, experience level).

### Problem Library

-   As a user, I can browse/search/filter problems by difficulty, topic,
    and source.
-   As a user, I can mark a problem as attempted, solved, or
    to-be-reviewed.
-   As a user, I can submit my own problems with descriptions and sample
    tests.
-   As an admin, I can approve or reject submitted problems.

### Mock Interview Scheduling

-   As a candidate, I can request a mock interview slot.
-   As an interviewer, I can view available requests and accept them.
-   As a user, I can see my upcoming and past interview sessions.
-   As a system, I should prevent double-booking of the same time slot.

### Progress Tracking & Analytics

-   As a user, I can see statistics like problems attempted/solved,
    weakest topics, and average solve time.
-   As a user, I can filter analytics by date range.

### Recommendation Engine

-   As a system, I can recommend problems based on the user's weakest
    topics.
-   As a system, I can increase the frequency of recommendations for
    problems not solved in the past.

### Notes & Solution History

-   As a user, I can save notes and explanations for each problem I
    attempt.
-   As a user, I can view my past solutions and compare them with
    optimal solutions.

## Non-Functional Requirements

-   The system should allow for role-based access control (user,
    interviewer, admin).
-   The system should be designed so that problem-solving logic
    (recommendations, analytics) can evolve without breaking the rest of
    the app.
-   The architecture should allow migration from in-memory to persistent
    storage with minimal changes.

## Expected Complexity

-   Entities: Multiple, with non-trivial relationships (many-to-many,
    one-to-many).
-   Business Logic: Scheduling conflicts, recommendation ranking,
    analytics computation.
-   Extensibility: Ability to add new features like 'code execution
    engine' or 'video interview integration' later without massive
    rewrites.
