import { keys } from '../keys';
import {
  createBillingConfig,
  PriceInterval,
  PriceModel,
  PriceType
} from './schema';

// Adapty-specific features (EXACT from adapty.io/pricing)
enum Feature {
  // Free tier
  PurchaseSDKs = 'Purchase SDKs for all platforms',
  SubscriptionAnalytics = 'Subscription analytics',
  RemotePaywallEditing = 'Remote paywall editing',
  NoCodePaywallBuilder = 'No-code paywall builder',

  // Pro tier additions
  BuilderAdvancedFeatures = 'Builder advanced features',
  ABTesting = 'A/B testing for paywalls',
  LTVAnalytics = 'LTV and advanced analytics',
  Integrations = 'Integrations',
  Localization = 'Localization',
  ChatSupport = 'Chat support',

  // Pro+ tier additions
  ETLIntegrations = 'ETL integrations',
  PredictionLTV = 'Prediction of LTV and revenue',
  PriorityChatSupport = 'Priority chat support',

  // Enterprise tier additions
  CustomPricing = 'Custom pricing',
  DataInsights = 'Data insights for your app',
  CustomSLA = 'Custom SLA',
  DedicatedSlackSupport = 'Dedicated support manager in Slack'
}

const currency = 'USD';

// Adapty uses percentage-based pricing (% of revenue)
// From adapty.io/pricing (scraped 2026-01-21):
// - Free: $0/month, up to $10K revenue
// - Pro: 1% of revenue, min $99 per month (Most popular)
// - Pro+: 1.2% of revenue, min $499 per month
// - Enterprise: Custom

export const billingConfig = createBillingConfig({
  products: [
    {
      id: 'free',
      name: 'Free',
      description: 'up to $10K revenue',
      priceDisplay: '$0',
      priceUnit: '/month',
      label: 'Start for free',
      isFree: true,
      features: [
        Feature.PurchaseSDKs,
        Feature.SubscriptionAnalytics,
        Feature.RemotePaywallEditing,
        Feature.NoCodePaywallBuilder
      ],
      plans: [
        {
          id: 'plan-free-month',
          displayIntervals: [PriceInterval.Month],
          prices: [
            {
              id: 'price-free-month-id',
              type: PriceType.Recurring,
              model: PriceModel.Flat,
              interval: PriceInterval.Month,
              cost: 0,
              currency
            }
          ]
        },
        {
          id: 'plan-free-year',
          displayIntervals: [PriceInterval.Year],
          prices: [
            {
              id: 'price-free-year-id',
              interval: PriceInterval.Year,
              type: PriceType.Recurring,
              model: PriceModel.Flat,
              cost: 0,
              currency
            }
          ]
        }
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'min $99 per month',
      priceDisplay: '1%',
      priceUnit: 'of revenue',
      label: 'Start with Pro',
      badgeText: 'Most popular',
      recommended: true,
      features: [
        Feature.PurchaseSDKs,
        Feature.SubscriptionAnalytics,
        Feature.RemotePaywallEditing,
        Feature.NoCodePaywallBuilder,
        Feature.BuilderAdvancedFeatures,
        Feature.ABTesting,
        Feature.LTVAnalytics,
        Feature.Integrations,
        Feature.Localization,
        Feature.ChatSupport
      ],
      plans: [
        {
          id: 'plan-pro-month',
          displayIntervals: [PriceInterval.Month],
          trialDays: 14,
          prices: [
            {
              id:
                keys().NEXT_PUBLIC_BILLING_PRICE_PRO_MONTH_ID ||
                'price-pro-month-id',
              interval: PriceInterval.Month,
              type: PriceType.Recurring,
              model: PriceModel.Flat,
              cost: 99, // Minimum $99/mo (1% of MTR)
              currency
            }
          ]
        },
        {
          id: 'plan-pro-year',
          displayIntervals: [PriceInterval.Year],
          trialDays: 14,
          prices: [
            {
              id:
                keys().NEXT_PUBLIC_BILLING_PRICE_PRO_YEAR_ID ||
                'price-pro-year-id',
              interval: PriceInterval.Year,
              type: PriceType.Recurring,
              model: PriceModel.Flat,
              cost: 990, // ~$82.50/mo equivalent
              currency
            }
          ]
        }
      ]
    },
    {
      id: 'pro-plus',
      name: 'Pro+',
      description: 'min $499 per month',
      priceDisplay: '1.2%',
      priceUnit: 'of revenue',
      label: 'Start with Pro+',
      features: [
        Feature.PurchaseSDKs,
        Feature.SubscriptionAnalytics,
        Feature.RemotePaywallEditing,
        Feature.NoCodePaywallBuilder,
        Feature.BuilderAdvancedFeatures,
        Feature.ABTesting,
        Feature.LTVAnalytics,
        Feature.Integrations,
        Feature.Localization,
        Feature.ChatSupport,
        Feature.ETLIntegrations,
        Feature.PredictionLTV,
        Feature.PriorityChatSupport
      ],
      plans: [
        {
          id: 'plan-pro-plus-month',
          displayIntervals: [PriceInterval.Month],
          trialDays: 14,
          prices: [
            {
              id:
                keys().NEXT_PUBLIC_BILLING_PRICE_LIFETIME_ID ||
                'price-pro-plus-month-id',
              interval: PriceInterval.Month,
              type: PriceType.Recurring,
              model: PriceModel.Flat,
              cost: 499, // Minimum $499/mo (1.2% of MTR)
              currency
            }
          ]
        },
        {
          id: 'plan-pro-plus-year',
          displayIntervals: [PriceInterval.Year],
          trialDays: 14,
          prices: [
            {
              id: 'price-pro-plus-year-id',
              interval: PriceInterval.Year,
              type: PriceType.Recurring,
              model: PriceModel.Flat,
              cost: 4990, // ~$416/mo equivalent
              currency
            }
          ]
        }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large-scale apps',
      priceDisplay: 'Custom',
      priceUnit: '',
      label: 'Contact us',
      isEnterprise: true,
      features: [
        Feature.PurchaseSDKs,
        Feature.SubscriptionAnalytics,
        Feature.RemotePaywallEditing,
        Feature.NoCodePaywallBuilder,
        Feature.BuilderAdvancedFeatures,
        Feature.ABTesting,
        Feature.LTVAnalytics,
        Feature.Integrations,
        Feature.Localization,
        Feature.ChatSupport,
        Feature.ETLIntegrations,
        Feature.PredictionLTV,
        Feature.PriorityChatSupport,
        Feature.CustomPricing,
        Feature.DataInsights,
        Feature.CustomSLA,
        Feature.DedicatedSlackSupport
      ],
      plans: [
        {
          id: 'plan-enterprise-month',
          displayIntervals: [PriceInterval.Month],
          prices: [
            {
              id:
                keys().NEXT_PUBLIC_BILLING_PRICE_ENTERPRISE_MONTH_ID ||
                'price-enterprise-month-id',
              interval: PriceInterval.Month,
              type: PriceType.Recurring,
              model: PriceModel.Flat,
              cost: 0, // Custom pricing
              currency
            }
          ]
        },
        {
          id: 'plan-enterprise-year',
          displayIntervals: [PriceInterval.Year],
          prices: [
            {
              id:
                keys().NEXT_PUBLIC_BILLING_PRICE_ENTERPRISE_YEAR_ID ||
                'price-enterprise-year-id',
              interval: PriceInterval.Year,
              type: PriceType.Recurring,
              model: PriceModel.Flat,
              cost: 0, // Custom pricing
              currency
            }
          ]
        }
      ]
    }
  ]
});

export const billingConfigDisplayIntervals = Array.from(
  new Set(
    billingConfig.products
      .filter((product) => !product.hidden)
      .flatMap((product) =>
        product.plans.flatMap((plan) => plan.displayIntervals)
      )
      .filter(Boolean)
  )
) as PriceInterval[];
