# Quarto Game (Java)

This is a Java-based implementation of **Quarto**, the abstract strategy board game. It supports local multiplayer and AI opponents using Rule-Based logic. The project uses JavaFX for the graphical interface and is designed with modular architecture for easy expansion and testing.

## 🧠 About Quarto

Quarto is a 2-player game played on a 4x4 board. There are 16 unique pieces, each with 4 different attributes:
- Tall or short
- Light or dark
- Round or square
- Solid or hollow

Players take turns choosing a piece for their opponent to place. The goal is to be the first to place a piece that completes a row, column, or diagonal of four pieces that share at least one common attribute.

## 🚀 Features

- JavaFX-based GUI
- Local multiplayer support
- Two AI strategies:
  - **Rule-Based AI** using facts and logical inference
- Real-time win detection
- Clean code structure and modular design
- Debug-friendly with clear logs and structure

## 🧠 AI Strategy Overview

### RuleBasedStrategy
- Implements a lightweight inference engine
- Defines facts (e.g., available pieces, dangerous pieces)
- Applies rules to make logical, efficient decisions

## 🗂️ Project Structure
src/
├── game/             # Game logic: GameSession, GameRules, Piece, Board
├── ui/               # JavaFX GUI: GameView, PieceView, BoardView
├── ai/               # AI strategies: MiniMax, Rule-Based
├── rules/            # Rule engine: Facts, Rules, InferenceEngine
└── utils/            # Helper utilities (e.g., logging, enums)
## 🛠️ Getting Started

### Requirements
- Java 17 or higher
- JavaFX SDK
- A Java IDE
