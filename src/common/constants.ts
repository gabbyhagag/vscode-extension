export const SPECTRAL_SCAN = 'spectral.scan'
export const SPECTRAL_SHOW_OUTPUT = 'spectral.showOutput'
export const SPECTRAL_SET_DSN = 'spectral.setDsn'
export const CONTEXT_PREFIX = 'spectral:'
export const HAS_SPECTRAL_INSTALLED = 'hasSpectralInstalled'
export const HAS_DSN = 'hasDsn'
export const HAS_LICENSE = 'hasLicense'
export const SCAN_STATE = 'scanState'
export const PRE_SCAN = 'preScan'
export const SPECTRAL_VIEW_SECRETS = 'spectral.views.secrets'
export const SPECTRAL_VIEW_IAC = 'spectral.views.iac'

export enum ScanState {
  preScan = 'preScan',
  inProgress = 'inProgress',
  success = 'success',
  failed = 'failed',
}

export enum FindingSeverity {
  error = 'error',
  warning = 'warning',
  info = 'info',
}

export enum FindingSeverityLevel {
  error = 1,
  warning = 2,
  info = 3,
}

export enum FindingType {
  secret = 'secret',
  iac = 'iac',
}

export const SPECTRAL_FOLDER = `${process.env.HOME}/.spectral`
export const SPECTRAL_DSN = 'SPECTRAL_DSN'
export const FINDING_POSITION_LINE_INDEX = 0
export const FINDING_POSITION_COL_INDEX = 1
export const PLAYBOOKS_URL =
  'https://get.spectralops.io/api/v1/issues/playbooks'
