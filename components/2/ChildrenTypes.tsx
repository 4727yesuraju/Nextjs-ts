//import  { ReactNode } from 'react'; 
//ReactNode containes all types of ReactElements and here ReactNode is import all ReactTypes;

import { type ReactNode } from 'react'; 
//by prefixing type before ReactNode it will use only required Types at compile time

function ChildrenTypes({children} : {children : ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}

export default ChildrenTypes
