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

  @media (max-width: 900px) {
    form {
      grid-template-columns: 1fr;
    }
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
  
  input, textarea {
    width: calc(100% - (var(--spacer) / 4));
    font-size: 1.05rem;
    padding: calc(var(--spacer) / 4);
    border-radius: calc(var(--spacer) / 4);
    border: 4px solid var(--color-orange);
  }

  button {
    width: calc(100% - var(--spacer)/4);
    font-size: 1.05rem;
    padding: calc(var(--spacer) / 4);
    background: var(--color-orange);
    border-radius: calc(var(--spacer) / 4);
    border: 4px solid var(--color-orange);
    margin: 0 auto;
    color: var(--white);
  }

  label {
    width: 100%;
  }
</style>