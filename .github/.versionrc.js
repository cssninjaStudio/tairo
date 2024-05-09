export default {
  options: {
    preset: {
      name: 'conventionalcommits',
      types: [
        { type: "feat", section: "🚀 Features" },
        { type: "fix", section: "🩹 Bug Fixes" },
        { type: "docs", section: "📖 Documentation" },
        { type: "perf", section: "🔥 Performance" },
        { type: "refactor", section: "💅 Refactors" },
        { type: "chore", hidden: true },
        { type: "ci", hidden: true },
        { type: "style", hidden: true },
        { type: "test", hidden: true },
      ]
    }
  }
}