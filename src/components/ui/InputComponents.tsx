import React from 'react';

import Input from './../input/Input';

const InputComponents = () => {

    return (
        <div className="container">
            
            <Input
            type="text"
            value="value"
            placeholder="place holder"
            disabled={false}
            isError={false}
            errorMessage={['다시입력하세요']}
          />

          <br />
          <br />

          <Input
            type="text"
            value="value"
            placeholder="place holder"
            disabled={false}
            isError={false}
            isValid={true}
            errorMessage={['다시입력하세요', '다시입력하세요']}
          />

          <br />
          <br />

          <Input 
            type="text" 
            value="value" 
            placeholder="place holder" 
            disabled={false} 
            isError={true} 
            isValid={false} 
            errorMessage={['다시입력하세요', '다시입력하세요']} 
          />

        </div>
    )
}

export default InputComponents;