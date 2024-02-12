
export default function layout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }