<script lang='ts'>

</script>

<form name="contact" method="POST" data-netlify="true">
  <div>
    <h3>Contact Me</h3>
    <p>I am always open to new opportunities and projects. Please reach out if you would like chat about a future project, or if you have any question or comment. 😀</p>
  </div>
  <p class="grid">
    <input type="hidden" name="form-name" value="contact" />
    <label for="name">
      <input type="text" name="name" placeholder="What is your name" />
    </label>
    <label for="email">
      <input type="email" name="email" placeholder="What is your email" />
    </label>
    <label for="message">
      <textarea name="message" placeholder="Leave your message here..."></textarea>
    </label>
    <button type="submit">Send</button>
  </p>
</form>

<style>
  h3 {
    font-size: 2rem;
  }

  form {
    width: 100%;
    display: grid;
    margin-top: var(--spacer);
    grid-template-columns: 1fr 1fr;
    gap: calc(var(--spacer) / 2);
  }

  form p {
    font-size: 1.5rem;
  }

	.grid {
    width: 100%;
    display: grid;
    margin-top: var(--spacer);
    grid-template-columns: 1fr;
    gap: calc(var(--spacer) / 2);
  }

  input, textarea, button {
    width: calc(100% - var(--spacer) / 4);
    font-size: 1.05rem;
    padding: calc(var(--spacer) / 4);
    border-radius: calc(var(--spacer) / 4);
  }
  
  input, textarea {
    border: 4px solid var(--color-orange);
  }

  button {
    background: var(--gradient-red);
    border: 4px solid var(--gradient-red);
    margin: 0 auto;
    color: var(--white);
  }

  label {
    width: 100%;
  }

  @media (max-width: 900px) {
    form {
      grid-template-columns: 1fr;
    }

    h3 {
      font-size: 1.25rem;
    }

    form p {
      font-size: 1rem;
    }

    input, textarea, button {
      width: calc(100% - var(--spacer) / 6);
      font-size: 0.8rem;
      padding: calc(var(--spacer) / 6);
      border-radius: calc(var(--spacer) / 6);
    }

    form, .grid {
      margin-top: calc(var(--spacer) / 6);
      margin-bottom: calc(var(--spacer) / 2);
    }

    .grid {
      gap: calc(var(--spacer) / 6);
    }
  }
</style>