<template lang="pug">
div
  slot
</template>

<script>
export default {
  props: ['thickbox'],

  /**
   * Show the create board modal (via thickbox)
   */
  mounted () {
    setTimeout(() => {
      const $modal = document.querySelector('#TB_window')
      const $modalInner = document.querySelector('#TB_ajaxContent')
      
      $modalInner.style.width = 'auto'
      $modalInner.style.height = 'auto'

      $modal.style.width = `${this.thickbox.width + 30}px`
      $modal.style.height = `${this.thickbox.height + 30}px`
      $modal.style.left = '50%'
      $modal.style.top = '50%'
      $modal.style.marginLeft = `${-this.thickbox.width / 2 - 15}px`
      $modal.style.marginTop = `${-this.thickbox.height / 2 - 15}px`

      $modal.querySelector('input').focus()

      window.jQuery('body').on('thickbox:removed', this.closeModal)
    })
  },

  destroyed () {
    window.jQuery('#TB_closeWindowButton').click()
    window.jQuery('body').off('thickbox:removed', this.closeModal)
  },

  methods: {
    /**
     * Close modal (via thickbox)
     */
    closeModal () {
      window.jQuery('#TB_closeWindowButton').click()
      this.$emit('close')
    }
  }
}
</script>