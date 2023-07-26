import { css, useTheme } from "@emotion/react"
import { Theme } from "../../../styles/theme"
import { ChangeEventHandler } from "react"
import Typography from "../Typography/Typography"

type RadioButtonProps = {
    name: string
    id?: string
    value?: string
    label: string
    isChecked?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const RadioButton = ({ name, id, value, label, isChecked, onChange }: RadioButtonProps) => {
    const theme = useTheme() as Theme
    const styles = getStyles(theme)
    return (
        <label htmlFor={id} css={styles.label}>
            <input css={styles.input} type="radio" id={id} name={name} value={value} checked={isChecked} onChange={onChange}
            />
            <span css={styles.customRadio}></span>
            <Typography variant="body2">{label}</Typography>
        </label>
    )
}

const getStyles = (theme: Theme) => {
    return ({
        input: css({
            visibility: "hidden",
            ":checked": {
                "+ span": {
                    border: `2px solid ${theme.colors.secondary.main}`,
                    "::after": {
                        opacity: 1
                    }
                }
            }
        }),
        label: css({
            display: "flex",
            gap: theme.spacing[1],
            cursor: "pointer",
            lineHeight: "30px"
        }),
        customRadio: css({
            left: "-8px",
            top: "6px",
            cursor: "pointer",
            width: "18px",
            height: "18px",
            border: `2px solid ${theme.colors.grey[400]}`,
            borderRadius: "50%",
            display: "inline-block",
            position: "relative",
            "::after": {
                content: "''",
                width: "12px",
                height: "12px",
                background: theme.colors.secondary.main,
                position: "absolute",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                transition: "opacity 0.2s",
            }
        })
    })
}

export default RadioButton
