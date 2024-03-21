import React, { useEffect } from 'react';
import { History as HistoryInterface } from './interface';
import { Ps1 } from '../Ps1';
import Typewriter from 'typewriter-effect';
import { useTts } from 'tts-react'; // Import useTts from tts-react

export const History: React.FC<{
  history: Array<HistoryInterface>;
  inputRef: any;
}> = ({ inputRef, history }) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          {index === history.length - 1 && index != 0 ? (
            <>
              <TTS text={entry.output} />
              <Typewriter
                onInit={(typewriter) => {
                  const lines = entry.output.split('\n');
                  for (const line of lines) {
                    typewriter
                      .typeString(line + '<br />')
                      .callFunction(() => {
                        if (!inputRef.current) return;
                        inputRef.current.scrollIntoView();
                        inputRef.current.focus({ preventScroll: true });
                      })
                      .start();
                  }
                }}
                options={{
                  delay: 10,
                  cursor: '',
                }}
              />
            </>
          ) : (
            <>
              <p
                className="whitespace-pre-wrap mb-2"
                style={{ lineHeight: 'normal' }}
                dangerouslySetInnerHTML={{ __html: entry.output }}
              />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export const TTS = ({ text }: { text: string }) => {
  const { play } = useTts({
    children: text,
    autoPlay: true,
  });

  return (
    <div style={{ display: 'none' }}>
      <p
        className="whitespace-pre-wrap mb-2"
        style={{ lineHeight: 'normal' }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default History;
