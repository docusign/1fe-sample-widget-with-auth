# 1fe Sample Widget with Auth

A sample widget demonstrating authentication patterns within the 1fe ecosystem. This widget showcases how to handle authentication requirements and protected widget functionality.

## What's in this repository

This sample widget demonstrates:

- **Authentication integration** with 1fe platform auth services
- **Protected widget content** that requires user authentication
- **Auth state management** and user session handling
- **Security best practices** for authenticated widgets
- **Testing patterns** for auth-protected components
- **CI/CD workflows** for secure widget deployment

## Prerequisites

- **Node.js** `>= 22`
- **Yarn** (package manager)

## Getting Started

### Development Setup

```bash
# Clone this repository
git clone <repository-url>
cd 1fe-sample-widget-with-auth

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Project Structure

```text
src/
├── Root.tsx              # Main authenticated component
├── contract.ts           # Widget contract with auth interface
├── declarations.d.ts     # TypeScript declarations
├── root.component.tsx    # Root component wrapper
├── root.component.test.tsx # Component tests
└── widget.ts            # Widget entry point
tests/
└── widget.spec.ts       # E2E tests
workflows/
├── rollback-widget.yml  # Rollback automation
└── widget-ci.yml        # CI/CD pipeline
```

## Development Commands

```bash
# Start development server with hot reloading
yarn dev

# Build widget for production
yarn build:widget

# Run unit tests
yarn test

# Lint code
yarn lint

# Format code
yarn format

# Check code formatting
yarn check-format
```

## Authentication Features

### Auth Integration

- **User authentication** validation
- **Session management** with platform auth services
- **Protected routes** and component access
- **Auth state synchronization** across widgets

### Security

- **Token validation** and refresh handling
- **Secure API calls** with authenticated requests
- **Permission-based** content rendering
- **Auth error handling** and user feedback

## Widget Contract

The widget defines its authentication interface in `src/contract.ts`:

```typescript
export interface AuthWidgetContract {
  // Authentication-specific contract definitions
}
```

## Testing

### Unit Testing

- Jest with React Testing Library
- Auth state mocking and testing
- Protected component testing

### E2E Testing

- Playwright for authenticated user flows
- Login/logout scenarios
- Protected content access validation

## CI/CD Workflows

### Deployment Pipeline (`workflows/widget-ci.yml`)

- Automated testing and linting
- Security scanning
- Authenticated deployment
- Environment-specific configurations

### Rollback Process (`workflows/rollback-widget.yml`)

- Automated rollback capabilities
- Version management
- Incident response procedures

## Configuration

Uses base configuration from `@1fe/sample-widget-base-config` with additional auth-specific settings:

- Authentication endpoints
- Token management
- Security policies

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run tests (`yarn test`)
5. Ensure linting passes (`yarn lint`)
6. Format your code (`yarn format`)
7. Commit your changes (`git commit -m 'Add feature'`)
8. Push to your branch (`git push origin feature/your-feature`)
9. Open a Pull Request

### Security Considerations

- Never commit authentication tokens or secrets
- Test authentication flows thoroughly
- Follow security best practices for auth handling
- Review auth-related changes carefully

## Troubleshooting

### Common Issues

- **Auth failures**: Check token validity and refresh logic
- **Session timeouts**: Verify session management configuration
- **Permission errors**: Ensure proper role-based access control

## Getting Help

- **[1fe Documentation](https://1fe.com/getting-started/installation/)** - Complete platform documentation
- **[GitHub Issues](https://github.com/docusign/1fe/issues)** - Report bugs or request features
- **[GitHub Discussions](https://github.com/docusign/1fe/discussions)** - Ask questions and share ideas

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
