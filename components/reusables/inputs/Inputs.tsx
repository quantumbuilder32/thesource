import React from 'react'

export function TextInput({ type = "text", name, placeHolder, value, onChange, labelName, id, feedbackEl, ...elProps }: { type?: string, name: string, placeHolder?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, labelName?: string, id?: string, feedbackEl?: JSX.Element } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...elProps} style={{ display: "grid", alignContent: "flex-start", ...elProps?.style }}>
            {labelName && (
                <label htmlFor={id ?? name}>{labelName}</label>
            )}

            <input id={id ?? name} type={type} name={name} placeholder={placeHolder} value={value} onChange={onChange} />

            {feedbackEl}
        </div>
    )
}
