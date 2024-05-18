import { ReactNode } from "react";

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
}

type WarningBoxProps = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high'; 
    children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => { 
  const { children, mode } = props;
  
  if (mode === 'hint') {
    return (
        <aside className="infobox infobox-hint">
           {children}
        </aside>
      )
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
       {mode === 'warning' ? <h2>Warning</h2> : null}
       {children}
    </aside>
  )
}

export default InfoBox