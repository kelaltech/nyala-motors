

import { defineMessages } from 'react-intl'
import { PropTypes } from 'prop-types'

import messages from './messages.json'

defineMessages(messages)

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <FormattedMessage
          id={messages.poweredBy.id}
          defaultMessage={messages.poweredBy.defaultMessage}
          key="poweredBy"
        />
        <a key="website" href="https://kelaltech.com" target="_blank" rel="noopener noreferrer">
          kelaltech PLC
        </a>
      </div>
    </Wrapper>
  )
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
}

export default LeftMenuFooter
