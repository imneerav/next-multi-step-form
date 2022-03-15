const RTASection = ({ children, heading }) => {
  return (
          <article className="message">
            <div className="message-header">
              <p>{heading}</p>
            </div>
            <div className="message-body">{children}</div>
          </article>
        )
}

export default RTASection