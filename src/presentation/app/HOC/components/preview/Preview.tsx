import React, {useState} from 'react';
import {Card, Button} from 'reactstrap';
import {OverlineTitle} from '../text/Text';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IPreviewCardProps {
  className?: string;
  bodyClass?: string;
  children: React.ReactNode;
}

export const PreviewCard: React.FC<IPreviewCardProps> = ({className, bodyClass, children}) => {
  return (
    <Card className={`card-preview ${className ? className : ''}`}>
      <div className={`card-inner ${bodyClass ? bodyClass : ''}`}>{children}</div>
    </Card>
  );
};

export const PreviewAltCard: React.FC<IPreviewCardProps> = ({className, bodyClass, children}) => {
  return (
    <Card className={`card-bordered ${className ? className : ''}`}>
      <div className={`card-inner ${bodyClass ? bodyClass : ''}`}>{children}</div>
    </Card>
  );
};

interface PreviewTableProps {
  className?: string;
  size?: string;
  children: React.ReactNode;
}

export const PreviewTable: React.FC<PreviewTableProps> = ({className, size, children}) => {
  return (
    <Card className={`card-preview ${className ? className : ''}`}>
      <table className={`table preview-reference ${size ? `table-${size}` : ''}`}>{children}</table>
    </Card>
  );
};

interface CodeBlockProps {
  language: string;
  title?: string;
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({language, title, children}) => {
  const [copyText] = useState(children);
  const [copyState, setCopyState] = useState(false);
  const onCopyClick = () => {
    setCopyState(true);
    setTimeout(() => setCopyState(false), 2000);
  };
  return (
    <div className={`code-block code-block-clean ${copyState ? 'clipboard-success' : ''}`}>
      <OverlineTitle className='title'>{title ? title : 'Code Example'}</OverlineTitle>
      <CopyToClipboard text={copyText} onCopy={onCopyClick}>
        <Button color='blank' size='sm' className='clipboard-init'>
          {copyState ? 'Copied' : 'Copy'}
        </Button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        className='bg-lighter h-max-150px m-0'
        style={a11yLight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
