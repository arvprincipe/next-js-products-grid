import { NextPage } from "next";
import { DisplayPrice, OfferPrice } from './styles/styles'

interface FormattedPriceDisplayProps {
  min: number | null;
  max?: number | null;
  currency?: string;
  locale?: string;
  language: string;
  message: string;
}

/**
 * Formatted Price or Price Range Display component
 * displays a price or price range between min price to max price that is formatted to the currency and locale or show price pending if price is not available
 * @param props
 */
const PriceDisplay: NextPage<FormattedPriceDisplayProps> = (props) => {
  const min: any = props.min;
  const max: any = props.max ? props.max : null;
  const currency = props.currency;
  const language = props.language;
  const message = props.message;

  return (
    <>
      {currency && (
        <div className="prices">
          {max === null ? (
            min === null ? (
              <>{message}</>
            ) : (
              <DisplayPrice>
                {Intl.NumberFormat(language, {
                  style: "currency",
                  currency,
                }).format(min)}
              </DisplayPrice>
            )
          ) : (
            <>
              <OfferPrice>
                {` ${Intl.NumberFormat(language, {
                  style: "currency",
                  currency,
                }).format(max)}`}</OfferPrice>
              <DisplayPrice>
                {`${Intl.NumberFormat(language, {
                  style: "currency",
                  currency,
                }).format(min)}`}
              </DisplayPrice>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PriceDisplay