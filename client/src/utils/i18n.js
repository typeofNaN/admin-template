export function generateTitle (title) {
  const hasKey = this.$te('routes.' + title)

  if (hasKey) {
    const translatedTitle = this.$t('routes.' + title)

    return translatedTitle
  }
  return title
}
